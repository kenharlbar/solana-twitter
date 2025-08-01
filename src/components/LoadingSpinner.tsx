import { Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <Loader2 className={cn(
      'animate-spin text-primary',
      sizeClasses[size],
      className
    )} />
  );
}