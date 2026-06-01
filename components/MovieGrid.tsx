'use client';

import { useState, useMemo } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: string;
  title: string;
  image: string;
  category: string;
  rating: number;
  year: number;
  duration: string;
}

const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'The Shawshank Redemption',
    image: '/movies/shawshank.png',
    category: 'Drama',
    rating: 9.3,
    year: 1994,
    duration: '142 min',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    image: '/movies/darkknight.png',
    category: 'Action',
    rating: 9.0,
    year: 2008,
    duration: '152 min',
  },
  {
    id: '3',
    title: 'Pulp Fiction',
    image: '/movies/pulpfiction.png',
    category: 'Drama',
    rating: 8.9,
    year: 1994,
    duration: '154 min',
  },
  {
    id: '4',
    title: 'Inception',
    image: '/movies/inception.png',
    category: 'Sci-Fi',
    rating: 8.8,
    year: 2010,
    duration: '148 min',
  },
  {
    id: '5',
    title: 'Fight Club',
    image: '/movies/fightclub.png',
    category: 'Drama',
    rating: 8.8,
    year: 1999,
    duration: '139 min',
  },
  {
    id: '6',
    title: 'The Matrix',
    image: '/movies/matrix.png',
    category: 'Sci-Fi',
    rating: 8.7,
    year: 1999,
    duration: '136 min',
  },
  {
    id: '7',
    title: 'Interstellar',
    image: '/movies/interstellar.png',
    category: 'Sci-Fi',
    rating: 8.6,
    year: 2014,
    duration: '169 min',
  },
  {
    id: '8',
    title: 'Oppenheimer',
    image: '/movies/oppenheimer.png',
    category: 'Drama',
    rating: 8.4,
    year: 2023,
    duration: '180 min',
  },
  {
    id: '9',
    title: 'Dune',
    image: '/movies/dune.png',
    category: 'Sci-Fi',
    rating: 8.0,
    year: 2021,
    duration: '156 min',
  },
  {
    id: '10',
    title: 'La La Land',
    image: '/movies/lalaland.png',
    category: 'Romance',
    rating: 8.0,
    year: 2016,
    duration: '128 min',
  },
  {
    id: '11',
    title: 'Barbie',
    image: '/movies/barbie.png',
    category: 'Comedy',
    rating: 7.9,
    year: 2023,
    duration: '114 min',
  },
  {
    id: '12',
    title: 'Avatar',
    image: '/movies/avatar.png',
    category: 'Sci-Fi',
    rating: 7.8,
    year: 2009,
    duration: '162 min',
  },
];

const CATEGORIES = ['All', 'Sci-Fi', 'Action', 'Drama', 'Romance', 'Comedy'];
const SORT_OPTIONS = ['Rating', 'Year', 'Title'];

export default function MovieGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Rating');

  const filteredMovies = useMemo(() => {
    let movies = MOCK_MOVIES;

    // Filter by search query
    if (searchQuery) {
      movies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      movies = movies.filter((movie) => movie.category === selectedCategory);
    }

    // Sort
    movies.sort((a, b) => {
      switch (sortBy) {
        case 'Rating':
          return b.rating - a.rating;
        case 'Year':
          return b.year - a.year;
        case 'Title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return movies;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <section id="explore" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore Movies</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none"
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
            <input
              type="text"
              placeholder="Search movies by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary/50 border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            />
          </div>

          {/* Categories and Filters */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary border border-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  Sort by {option}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted">
            Showing {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
          </p>
        </div>

        {/* Movie Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 text-muted mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 4v16m10-16v16M4 8h16M4 16h16"
              />
            </svg>
            <p className="text-lg text-muted">No movies found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
