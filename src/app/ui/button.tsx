import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background min-h-[40px] px-6 py-2 rounded-full space-x-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground rounded-md',
        line: 'text-gray-600 hover:text-green-600 transition-colors',
        cta: 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
        faqToggle:
          'w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors shadow-none hover:shadow-none rounded-md',
        ctaFixed:
          'bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium',
      },
      size: {
        default: '', // 基本サイズ（すでにcvaのベースで指定済み）
        sm: 'h-9 px-3 text-sm rounded-md',
        lg: 'h-11 px-8 text-base',
        icon: 'h-10 w-10 p-0 rounded-full',
        full: 'px-4 py-6 rounded-full flex flex-col items-center gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
