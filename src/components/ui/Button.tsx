import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-navy text-white hover:opacity-90 focus:ring-primary-gold border-2 border-transparent shadow-lg',
    secondary: 'bg-gradient-gold text-primary-navy hover:opacity-90 focus:ring-primary-navy shadow-lg',
    outline: 'border-2 border-primary-gold text-primary-navy dark:text-text-light hover:bg-gradient-gold hover:text-primary-navy focus:ring-primary-gold',
    ghost: 'text-primary-navy dark:text-text-light hover:bg-primary-gold/10 focus:ring-primary-gold'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;