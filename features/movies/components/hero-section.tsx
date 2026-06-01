'use client';

import Image from 'next/image';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Badge } from '@/shared/ui/badge';
import type { Movie } from '../types';

interface HeroSectionProps {
  featuredMovie: Movie;
  onWatch?: (movie: Movie) => void;
}

export function HeroSection({ featuredMovie, onWatch }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={featuredMovie.image}
          alt={featuredMovie.title}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        
        {/* Multi-layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-bg-void))] via-[rgb(var(--color-bg-void))/0.85] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg-void))] via-transparent to-[rgb(var(--color-bg-void))/0.3]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--color-bg-void))/0.5] via-transparent to-[rgb(var(--color-bg-void))]" />
        
        {/* Animated Glow Effect */}
        <div
          className={cn(
            'absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px]',
            'bg-[rgb(var(--color-primary))] rounded-full',
            'opacity-[0.07] blur-[150px]',
            'animate-pulse'
          )}
        />
        <div
          className={cn(
            'absolute -top-1/4 right-1/4 w-[600px] h-[600px]',
            'bg-[rgb(var(--color-accent-purple))] rounded-full',
            'opacity-[0.05] blur-[120px]',
            'animate-pulse',
            'animation-delay-1000'
          )}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badges */}
          <div className="flex items-center gap-3 animate-fade-up opacity-0 stagger-1">
            <Badge variant="primary" size="lg">
              Featured
            </Badge>
            <Badge variant="default" size="lg">
              {featuredMovie.category}
            </Badge>
            <Badge variant="warning" size="lg">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {featuredMovie.rating}
            </Badge>
          </div>
          
          {/* Title */}
          <h1
            className={cn(
              'text-5xl lg:text-7xl font-bold',
              'text-[rgb(var(--color-text-primary))]',
              'leading-[1.1] tracking-tight',
              'animate-fade-up opacity-0 stagger-2'
            )}
          >
            <span className="text-glow">{featuredMovie.title}</span>
          </h1>
          
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-[rgb(var(--color-text-secondary))] animate-fade-up opacity-0 stagger-3">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {featuredMovie.year}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--color-text-muted))]" />
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {featuredMovie.duration}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-xl animate-fade-up opacity-0 stagger-4">
            {featuredMovie.description ||
              'An epic cinematic experience that will take you on an unforgettable journey through stunning visuals and compelling storytelling.'}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-up opacity-0 stagger-5">
            <Button
              variant="primary"
              size="xl"
              onClick={() => onWatch?.(featuredMovie)}
              className="group relative overflow-hidden"
              leftIcon={
                <svg
                  className="w-6 h-6 transition-transform group-hover:scale-110"
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
              variant="secondary"
              size="xl"
              leftIcon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              More Info
            </Button>
            <Button
              variant="ghost"
              size="xl"
              leftIcon={
                <svg
                  className="w-5 h-5"
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
      
      {/* Scan Line Effect */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none',
          'bg-gradient-to-b from-transparent via-[rgb(var(--color-primary))/0.03] to-transparent',
          'h-[2px] animate-[scan-line_4s_linear_infinite]'
        )}
      />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[rgb(var(--color-bg-void))] to-transparent" />
    </section>
  );
}
