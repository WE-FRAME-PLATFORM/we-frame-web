'use client';

import { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginModal({ onClose, onSuccess }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        onSuccess();
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-secondary border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted hover:text-foreground transition-smooth"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-muted">Sign in to your WeFrame account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 accent-primary" />
              <span className="text-muted">Remember me</span>
            </label>
            <button
              type="button"
              onClick={onClose}
              className="text-primary hover:text-accent transition-smooth"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-smooth font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-muted text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground hover:bg-white/10 transition-smooth font-medium text-sm">
            Google
          </button>
          <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground hover:bg-white/10 transition-smooth font-medium text-sm">
            GitHub
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center mt-6 text-muted text-sm">
          Don&apos;t have an account?{' '}
          <button
            onClick={onClose}
            className="text-primary hover:text-accent transition-smooth font-medium"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}
