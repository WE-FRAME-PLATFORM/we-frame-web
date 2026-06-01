import { cn } from '@/shared/lib/utils';
import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass' | 'glow';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variants = {
  default: `
    bg-[rgb(var(--color-bg-elevated))]
    border border-[rgb(255_255_255/0.06)]
  `,
  elevated: `
    bg-[rgb(var(--color-bg-surface))]
    border border-[rgb(255_255_255/0.08)]
    shadow-xl shadow-black/20
  `,
  glass: `
    bg-[rgb(var(--color-bg-elevated)/0.6)]
    backdrop-blur-xl
    border border-[rgb(255_255_255/0.1)]
  `,
  glow: `
    bg-[rgb(var(--color-bg-elevated))]
    border border-[rgb(var(--color-primary)/0.3)]
    shadow-lg shadow-[rgb(var(--color-primary))/0.1]
  `,
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  className,
  variant = 'default',
  hover = false,
  padding = 'md',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl',
        variants[variant],
        paddings[padding],
        hover && [
          'transition-all duration-300',
          'hover:border-[rgb(var(--color-primary)/0.4)]',
          'hover:shadow-xl hover:shadow-[rgb(var(--color-primary))/0.15]',
          'hover:-translate-y-1',
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-1.5', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-lg font-semibold text-[rgb(var(--color-text-primary))]',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-sm text-[rgb(var(--color-text-muted))]', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center pt-4', className)} {...props}>
      {children}
    </div>
  );
}
