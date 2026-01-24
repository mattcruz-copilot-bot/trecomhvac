import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - solid charcoal
        default: "bg-charcoal text-white hover:bg-slate hover:shadow-elevated hover:-translate-y-0.5",
        
        // Electric accent
        primary: "bg-electric text-white hover:bg-electric-muted hover:shadow-elevated hover:-translate-y-0.5",
        
        // Outline - refined border
        outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:-translate-y-0.5",
        
        // Secondary - subtle
        secondary: "bg-surface text-charcoal hover:bg-border hover:-translate-y-0.5",
        
        // Ghost - minimal
        ghost: "text-charcoal hover:bg-surface",
        
        // Link style
        link: "text-electric underline-offset-4 hover:underline p-0 h-auto",
        
        // Destructive
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        // Legacy compatibility
        hero: "bg-charcoal text-white hover:bg-slate hover:shadow-elevated hover:-translate-y-0.5 font-medium",
        "hero-outline": "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white hover:-translate-y-0.5 font-medium",
        navy: "bg-electric text-white hover:bg-electric-muted hover:shadow-elevated font-medium",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-base font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
