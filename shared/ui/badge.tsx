import { cn } from '@/shared/lib/utils';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  default: `
    bg-[rgb(var(--color-bg-surface))]
    text-[rgb(var(--color-text-secondary))]
    border border-[rgb(255_255_255/0.1)]
  `,
  primary: `
    bg-[rgb(var(--color-primary)/0.15)]
    text-[rgb(var(--color-primary))]
    border border-[rgb(var(--color-primary)/0.3)]
  `,
  secondary: `
    bg-[rgb(var(--color-accent-purple)/0.15)]
    text-[rgb(var(--color-accent-purple))]
    border border-[rgb(var(--color-accent-purple)/0.3)]
  `,
  success: `
    bg-[rgb(var(--color-accent-emerald)/0.15)]
    text-[rgb(var(--color-accent-emerald))]
    border border-[rgb(var(--color-accent-emerald)/0.3)]
  `,
  warning: `
    bg-[rgb(var(--color-accent-gold)/0.15)]
    text-[rgb(var(--color-accent-gold))]
    border border-[rgb(var(--color-accent-gold)/0.3)]
  `,
  error: `
    bg-red-500/15
    text-red-400
    border border-red-500/30
  `,
};

const sizes = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
