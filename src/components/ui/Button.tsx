import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gradient-to-r from-navy-500 to-navy-600 text-white hover:shadow-gold-glow hover:scale-105 focus:ring-navy-500': variant === 'primary',
            'bg-white text-navy-600 border border-navy-200 hover:bg-navy-50 focus:ring-navy-500': variant === 'secondary',
            'border-2 border-navy-500 text-navy-600 hover:bg-navy-500 hover:text-white focus:ring-navy-500': variant === 'outline',
            'text-navy-600 hover:bg-navy-50 focus:ring-navy-500': variant === 'ghost',
            'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 hover:shadow-navy-glow hover:scale-105 focus:ring-gold-500': variant === 'gold',
          },
          {
            'px-3 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;