'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    image: string;
    category: string;
    rating: number;
    year: number;
    duration: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg transition-smooth"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-secondary/50">
        <Image
          src={movie.image}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 backdrop-blur-sm transition-smooth">
            <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-smooth">
              <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition-smooth text-sm font-medium">
              Add to List
            </button>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
          {movie.category}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-black/60 rounded-full">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-white font-semibold text-sm">{movie.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate group-hover:text-primary transition-smooth">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-sm text-muted">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.duration}</span>
        </div>

        {/* Watch Button */}
        <button className="w-full mt-3 px-4 py-2 bg-primary/10 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-smooth font-medium text-sm">
          Watch Now
        </button>
      </div>
    </div>
  );
}
