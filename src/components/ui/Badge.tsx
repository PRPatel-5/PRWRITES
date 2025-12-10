import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
          {
            'bg-navy-500 text-white': variant === 'default',
            'bg-slate-100 text-slate-700': variant === 'secondary',
            'border border-slate-300 text-slate-700': variant === 'outline',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;