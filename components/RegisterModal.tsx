'use client';

import { useState } from 'react';

interface RegisterModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function RegisterModal({ onClose, onSuccess }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-secondary border border-white/10 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
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
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-muted">Join WeFrame and start watching today</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
            />
            <p className="text-xs text-muted mt-1">Minimum 8 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
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

          {/* Terms & Conditions */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-white/10 accent-primary mt-1 flex-shrink-0" />
            <span className="text-muted text-sm">
              I agree to WeFrame&apos;s{' '}
              <button type="button" className="text-primary hover:text-accent transition-smooth">
                Terms of Service
              </button>
              {' '}and{' '}
              <button type="button" className="text-primary hover:text-accent transition-smooth">
                Privacy Policy
              </button>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-smooth font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-muted text-sm">Or sign up with</span>
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

        {/* Login Link */}
        <p className="text-center mt-6 text-muted text-sm">
          Already have an account?{' '}
          <button
            onClick={onClose}
            className="text-primary hover:text-accent transition-smooth font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
