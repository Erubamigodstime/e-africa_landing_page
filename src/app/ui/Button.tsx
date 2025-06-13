// 'use client';
// import React from 'react';
// import clsx from 'clsx';
// import { ButtonProps } from '../lib/definition';



// export default function Button({
//   label,
//   size = 'md', 
//   bgColor = 'bg-[#13672B]', 
//   textColor = 'text-white',
//   hoverColor = 'hover:bg-[#0f4a1a]',
//   onClick,
//   type = 'button',

// }: ButtonProps){
//    const baseClasses = 'rounded-xl font-semibold transition duration-200 focus:outline-none';

//   const sizeClasses = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };
//     return(      
//       <button
//         type={type}
//         onClick={onClick}
//         className={clsx(baseClasses, sizeClasses[size], bgColor, textColor, hoverColor)} >
//         {label}
//       </button>
//     )
// }

'use client';
// components/ui/Button.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../lib/utils';

// 1. Define the style variants
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        brand: 'bg-[#13672B] text-white hover:bg-[#0f4a1a]',
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// 2. Button Props type — VariantProps is key here
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
