'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-');

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[rgb(var(--color-text-secondary))]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgb(var(--color-text-muted))]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              // Base
              'w-full h-11 px-4 rounded-xl',
              'bg-[rgb(var(--color-bg-surface))]',
              'border border-[rgb(255_255_255/0.08)]',
              'text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-muted))]',
              // Focus
              'focus:outline-none focus:border-[rgb(var(--color-primary)/0.5)]',
              'focus:ring-2 focus:ring-[rgb(var(--color-primary)/0.2)]',
              // Transitions
              'transition-all duration-200',
              // Hover
              'hover:border-[rgb(255_255_255/0.15)]',
              // Icons
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              // Error
              error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgb(var(--color-text-muted))]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {hint && !error && (
          <p className="text-xs text-[rgb(var(--color-text-muted))]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
