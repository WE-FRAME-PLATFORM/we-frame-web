'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onLogin: () => void;
  onRegister: () => void;
  isLoggedIn: boolean;
}

export default function Header({ onLogin, onRegister, isLoggedIn }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-xl text-white">WeFrame</span>
              <span className="text-xs text-muted">Watch Better. Together.</span>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </Link>
            <Link href="#explore" className="text-foreground hover:text-primary transition-smooth">
              Explore
            </Link>
            <Link href="#watch" className="text-foreground hover:text-primary transition-smooth">
              Watch Together
            </Link>
            <Link href="#lists" className="text-foreground hover:text-primary transition-smooth">
              My Lists
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-secondary/50 border border-white/10 rounded-lg px-4 py-2 w-64">
            <svg 
              className="w-5 h-5 text-muted flex-shrink-0"
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
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent ml-2 outline-none w-full text-sm placeholder-muted"
            />
          </div>

          {/* Auth Buttons & User Menu */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={onLogin}
                  className="hidden sm:px-4 py-2 text-foreground hover:text-primary transition-smooth"
                >
                  Sign In
                </button>
                <button
                  onClick={onRegister}
                  className="hidden sm:px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-smooth font-medium"
                >
                  Register
                </button>
              </>
            ) : (
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                U
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <Link href="#home" className="text-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link href="#explore" className="text-foreground hover:text-primary transition-smooth">
                Explore
              </Link>
              <Link href="#watch" className="text-foreground hover:text-primary transition-smooth">
                Watch Together
              </Link>
              <Link href="#lists" className="text-foreground hover:text-primary transition-smooth">
                My Lists
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
