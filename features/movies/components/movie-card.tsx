'use client';

import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  variant?: 'default' | 'featured' | 'compact';
  onWatch?: (movie: Movie) => void;
  onAddToList?: (movie: Movie) => void;
}

export function MovieCard({
  movie,
  variant = 'default',
  onWatch,
  onAddToList,
}: MovieCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'bg-[rgb(var(--color-bg-elevated))]',
        'border border-[rgb(255_255_255/0.06)]',
        'transition-all duration-500 ease-out',
        'hover:border-[rgb(var(--color-primary)/0.4)]',
        'hover:shadow-2xl hover:shadow-[rgb(var(--color-primary))/0.2]',
        'hover:-translate-y-2',
        variant === 'featured' && 'lg:col-span-2 lg:row-span-2'
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className={cn(
            'object-cover',
            'transition-transform duration-700 ease-out',
            'group-hover:scale-110'
          )}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Gradient Overlay */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-gradient-to-t from-[rgb(var(--color-bg-void))] via-[rgb(var(--color-bg-void))/0.4] to-transparent',
            'opacity-60 group-hover:opacity-90',
            'transition-opacity duration-500'
          )}
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant="primary" size="sm">
            {movie.category}
          </Badge>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[rgb(var(--color-bg-void))/0.8] backdrop-blur-sm">
            <svg
              className="w-3.5 h-3.5 text-[rgb(var(--color-accent-gold))]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold text-white">{movie.rating}</span>
          </div>
        </div>
        
        {/* Hover Actions */}
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'opacity-0 group-hover:opacity-100',
            'transition-all duration-300',
            'translate-y-4 group-hover:translate-y-0'
          )}
        >
          <div className="flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onWatch?.(movie)}
              className="shadow-lg shadow-[rgb(var(--color-primary))/0.4]"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Watch Now
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={() => onAddToList?.(movie)}
              className="text-white hover:bg-white/10"
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
            >
              Add to List
            </Button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-[rgb(var(--color-text-primary))] truncate group-hover:text-[rgb(var(--color-primary))] transition-colors">
          {movie.title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-[rgb(var(--color-text-muted))]">
          <span>{movie.year}</span>
          <span className="w-1 h-1 rounded-full bg-[rgb(var(--color-text-muted))]" />
          <span>{movie.duration}</span>
        </div>
      </div>
      
      {/* Bottom Glow Effect */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-px',
          'bg-gradient-to-r from-transparent via-[rgb(var(--color-primary))] to-transparent',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-500'
        )}
      />
    </div>
  );
}
