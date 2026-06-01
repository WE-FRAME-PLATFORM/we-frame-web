'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/features/movies/components/hero-section';
import { MovieGrid } from '@/features/movies/components/movie-grid';
import { LoginModal } from '@/features/auth/components/login-modal';
import { RegisterModal } from '@/features/auth/components/register-modal';
import type { Movie } from '@/features/movies/types';

// Featured movie for hero
const FEATURED_MOVIE: Movie = {
  id: '1',
  title: 'The Shawshank Redemption',
  image: '/movies/shawshank.png',
  category: 'Drama',
  rating: 9.3,
  year: 1994,
  duration: '142 min',
  description:
    'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. A timeless tale of hope, friendship, and the unbreakable human spirit.',
};

// All movies
const MOVIES: Movie[] = [
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

export function HomeView() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--color-bg-void))]">
      {/* Header */}
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection featuredMovie={FEATURED_MOVIE} />

        {/* Movie Grid */}
        <MovieGrid movies={MOVIES} title="Explore Movies" showFilters />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
}
