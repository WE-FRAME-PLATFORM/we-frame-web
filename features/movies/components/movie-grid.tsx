'use client';

import { useState, useMemo } from 'react';
import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { MovieCard } from './movie-card';
import type { Movie, MovieCategory, MovieFilters } from '../types';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  showFilters?: boolean;
}

const CATEGORIES: (MovieCategory | 'All')[] = [
  'All',
  'Action',
  'Sci-Fi',
  'Drama',
  'Comedy',
  'Romance',
  'Horror',
  'Thriller',
];

export function MovieGrid({
  movies,
  title = 'Explore Movies',
  showFilters = true,
}: MovieGridProps) {
  const [filters, setFilters] = useState<MovieFilters>({
    search: '',
    category: 'All',
    sortBy: 'rating',
    sortOrder: 'desc',
  });

  const filteredMovies = useMemo(() => {
    let result = [...movies];

    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase();
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(search)
      );
    }

    // Category filter
    if (filters.category !== 'All') {
      result = result.filter((movie) => movie.category === filters.category);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'rating':
          comparison = b.rating - a.rating;
          break;
        case 'year':
          comparison = b.year - a.year;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return filters.sortOrder === 'asc' ? -comparison : comparison;
    });

    return result;
  }, [movies, filters]);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div className="space-y-2">
            <h2
              className={cn(
                'text-3xl lg:text-4xl font-bold',
                'text-[rgb(var(--color-text-primary))]'
              )}
            >
              {title}
            </h2>
            <p className="text-[rgb(var(--color-text-muted))]">
              {filteredMovies.length} movies found
            </p>
          </div>

          {showFilters && (
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="w-72">
                <Input
                  placeholder="Search movies..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, search: e.target.value }))
                  }
                  leftIcon={
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  }
                />
              </div>

              {/* Sort Dropdown */}
              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    sortBy: e.target.value as MovieFilters['sortBy'],
                  }))
                }
                className={cn(
                  'h-11 px-4 rounded-xl',
                  'bg-[rgb(var(--color-bg-surface))]',
                  'border border-[rgb(255_255_255/0.08)]',
                  'text-[rgb(var(--color-text-primary))]',
                  'focus:outline-none focus:border-[rgb(var(--color-primary)/0.5)]',
                  'cursor-pointer'
                )}
              >
                <option value="rating">Sort by Rating</option>
                <option value="year">Sort by Year</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          )}
        </div>

        {/* Category Pills */}
        {showFilters && (
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilters((f) => ({ ...f, category }))}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium',
                  'transition-all duration-300',
                  filters.category === category
                    ? [
                        'bg-[rgb(var(--color-primary))]',
                        'text-white',
                        'shadow-lg shadow-[rgb(var(--color-primary))/0.3]',
                      ]
                    : [
                        'bg-[rgb(var(--color-bg-surface))]',
                        'text-[rgb(var(--color-text-secondary))]',
                        'border border-[rgb(255_255_255/0.08)]',
                        'hover:bg-[rgb(var(--color-bg-overlay))]',
                        'hover:text-[rgb(var(--color-text-primary))]',
                        'hover:border-[rgb(255_255_255/0.15)]',
                      ]
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Movie Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className={cn(
                'w-20 h-20 rounded-full mb-6',
                'bg-[rgb(var(--color-bg-surface))]',
                'flex items-center justify-center'
              )}
            >
              <svg
                className="w-10 h-10 text-[rgb(var(--color-text-muted))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[rgb(var(--color-text-primary))] mb-2">
              No movies found
            </h3>
            <p className="text-[rgb(var(--color-text-muted))] max-w-md">
              Try adjusting your search or filter criteria to find what you&apos;re
              looking for.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() =>
                setFilters({
                  search: '',
                  category: 'All',
                  sortBy: 'rating',
                  sortOrder: 'desc',
                })
              }
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
