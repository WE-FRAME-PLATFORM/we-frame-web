'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop)',
          transform: isHovering ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="max-w-2xl">
            {/* Featured Movie Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Featured Now</span>
            </div>

            {/* Movie Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight text-balance">
              Discover Your Next Favorite Film
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Smart recommendations tailored to your mood. Watch together with friends in real-time. 
              Save your favorites and track your viewing history.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-medium">
                Action
              </span>
              <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-medium">
                Adventure
              </span>
              <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-sm font-medium">
                Drama
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-smooth font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Explore Movies
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-smooth font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
