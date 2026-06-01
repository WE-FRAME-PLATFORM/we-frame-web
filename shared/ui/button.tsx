'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variants = {
  primary: `
    bg-gradient-to-r from-[rgb(var(--color-primary))] to-[rgb(var(--color-primary-hover))]
    text-white font-semibold
    shadow-lg shadow-[rgb(var(--color-primary))/0.25]
    hover:shadow-xl hover:shadow-[rgb(var(--color-primary))/0.35]
    hover:brightness-110
    active:brightness-95
  `,
  secondary: `
    bg-[rgb(var(--color-bg-surface))]
    text-[rgb(var(--color-text-primary))]
    border border-[rgb(255_255_255/0.1)]
    hover:bg-[rgb(var(--color-bg-overlay))]
    hover:border-[rgb(255_255_255/0.15)]
  `,
  ghost: `
    bg-transparent
    text-[rgb(var(--color-text-secondary))]
    hover:bg-[rgb(255_255_255/0.05)]
    hover:text-[rgb(var(--color-text-primary))]
  `,
  outline: `
    bg-transparent
    text-[rgb(var(--color-primary))]
    border border-[rgb(var(--color-primary)/0.5)]
    hover:bg-[rgb(var(--color-primary)/0.1)]
    hover:border-[rgb(var(--color-primary))]
  `,
  danger: `
    bg-red-600
    text-white font-semibold
    hover:bg-red-500
    active:bg-red-700
  `,
};

const sizes = {
  sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm rounded-lg gap-2',
  lg: 'h-12 px-6 text-base rounded-xl gap-2.5',
  xl: 'h-14 px-8 text-lg rounded-xl gap-3',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center',
          'font-medium transition-all duration-200 ease-out',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-bg-base))]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          // Variant & Size
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="absolute animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className={cn('flex items-center gap-2', isLoading && 'invisible')}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
