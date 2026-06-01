'use client';

import { cn } from '@/shared/lib/utils';
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-[95vw] max-h-[95vh]',
};

export function Modal({
  isOpen,
  onClose,
  size = 'md',
  className,
  children,
  ...props
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200]">
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className={cn(
          'absolute inset-0',
          'bg-[rgb(var(--color-bg-void))/0.85] backdrop-blur-md',
          'animate-fade-in'
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div className="relative flex items-center justify-center min-h-full p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            'relative w-full',
            sizes[size],
            'bg-[rgb(var(--color-bg-elevated))]',
            'border border-[rgb(255_255_255/0.1)]',
            'rounded-2xl shadow-2xl',
            'animate-fade-scale',
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export function ModalHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'px-6 py-5 border-b border-[rgb(255_255_255/0.08)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ModalTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'text-xl font-semibold text-[rgb(var(--color-text-primary))]',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function ModalDescription({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'mt-1 text-sm text-[rgb(var(--color-text-muted))]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function ModalBody({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-6', className)} {...props}>
      {children}
    </div>
  );
}

export function ModalFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'px-6 py-4 flex items-center justify-end gap-3',
        'border-t border-[rgb(255_255_255/0.08)]',
        'bg-[rgb(var(--color-bg-surface))/0.5]',
        'rounded-b-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function ModalClose({
  className,
  onClose,
  ...props
}: HTMLAttributes<HTMLButtonElement> & { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={cn(
        'absolute top-4 right-4 p-2 rounded-lg',
        'text-[rgb(var(--color-text-muted))]',
        'hover:text-[rgb(var(--color-text-primary))]',
        'hover:bg-[rgb(255_255_255/0.05)]',
        'transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-primary))]',
        className
      )}
      aria-label="Close modal"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
}
