'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

interface HeaderProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/watch-together', label: 'Watch Together' },
  { href: '/my-list', label: 'My List' },
];

export function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500',
        isScrolled
          ? [
              'bg-[rgb(var(--color-bg-void))/0.85]',
              'backdrop-blur-xl',
              'border-b border-[rgb(255_255_255/0.06)]',
              'shadow-lg shadow-black/20',
            ]
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Mark */}
            <div className="relative">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl',
                  'bg-gradient-to-br from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-hover))]',
                  'flex items-center justify-center',
                  'shadow-lg shadow-[rgb(var(--color-primary))/0.3]',
                  'group-hover:shadow-xl group-hover:shadow-[rgb(var(--color-primary))/0.4]',
                  'transition-all duration-300'
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 8V4h16v4" />
                  <path d="M4 16v4h16v-4" />
                  <path d="M12 4v16" />
                  <path d="M8 8l4 4 4-4" />
                </svg>
              </div>
              {/* Glow Effect */}
              <div
                className={cn(
                  'absolute inset-0 rounded-xl',
                  'bg-[rgb(var(--color-primary))]',
                  'opacity-0 group-hover:opacity-30',
                  'blur-xl',
                  'transition-opacity duration-300'
                )}
              />
            </div>
            {/* Wordmark */}
            <span className="text-2xl font-bold text-[rgb(var(--color-text-primary))] tracking-tight">
              We<span className="text-[rgb(var(--color-primary))]">Frame</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg',
                  'text-sm font-medium',
                  'text-[rgb(var(--color-text-secondary))]',
                  'hover:text-[rgb(var(--color-text-primary))]',
                  'hover:bg-[rgb(255_255_255/0.05)]',
                  'transition-all duration-200',
                  link.href === '/' && 'text-[rgb(var(--color-primary))]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:block">
              {isSearchOpen ? (
                <div className="animate-fade-in">
                  <Input
                    placeholder="Search movies..."
                    className="w-64"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
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
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={cn(
                    'p-2.5 rounded-xl',
                    'text-[rgb(var(--color-text-secondary))]',
                    'hover:text-[rgb(var(--color-text-primary))]',
                    'hover:bg-[rgb(255_255_255/0.05)]',
                    'transition-all duration-200'
                  )}
                >
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="md" onClick={onLoginClick}>
                Sign In
              </Button>
              <Button variant="primary" size="md" onClick={onRegisterClick}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2.5 rounded-xl',
                'text-[rgb(var(--color-text-secondary))]',
                'hover:text-[rgb(var(--color-text-primary))]',
                'hover:bg-[rgb(255_255_255/0.05)]',
                'transition-all duration-200'
              )}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={cn(
              'lg:hidden py-4 border-t border-[rgb(255_255_255/0.06)]',
              'animate-fade-down'
            )}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-xl',
                    'text-[rgb(var(--color-text-secondary))]',
                    'hover:text-[rgb(var(--color-text-primary))]',
                    'hover:bg-[rgb(255_255_255/0.05)]',
                    'transition-all duration-200'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="ghost" onClick={onLoginClick}>
                  Sign In
                </Button>
                <Button variant="primary" onClick={onRegisterClick}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
