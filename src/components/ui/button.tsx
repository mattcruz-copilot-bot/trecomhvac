import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary gradient button - premium navy-teal gradient with depth
        default: "bg-gradient-to-br from-navy via-navy-light to-teal/80 text-white shadow-lg shadow-navy/25 hover:shadow-xl hover:shadow-navy/35 hover:-translate-y-0.5 active:translate-y-0",
        
        // Primary with stronger teal accent
        primary: "bg-gradient-to-br from-navy via-slate to-teal text-white shadow-lg shadow-navy/30 hover:shadow-xl hover:shadow-navy/40 hover:-translate-y-0.5 active:translate-y-0",
        
        // Teal accent button with gradient
        teal: "bg-gradient-to-br from-teal via-teal to-teal-light text-white shadow-lg shadow-teal/30 hover:shadow-xl hover:shadow-teal/40 hover:-translate-y-0.5 active:translate-y-0",
        
        // Outline with gradient hover
        outline: "border-2 border-navy/30 text-navy bg-gradient-to-br from-transparent to-transparent hover:from-navy hover:to-slate hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg transition-all",
        
        // Secondary - subtle gradient background
        secondary: "bg-gradient-to-br from-surface to-surface-warm text-charcoal hover:from-border hover:to-surface hover:-translate-y-0.5 shadow-sm",
        
        // Ghost - minimal
        ghost: "text-charcoal-muted hover:text-charcoal hover:bg-surface/80",
        
        // Link style
        link: "text-navy underline-offset-4 hover:underline p-0 h-auto font-medium",
        
        // Destructive
        destructive: "bg-gradient-to-br from-destructive to-red-600 text-destructive-foreground hover:from-red-600 hover:to-destructive shadow-lg",

        // Glass effect button - translucent
        glass: "bg-white/70 backdrop-blur-xl border border-white/50 text-charcoal shadow-lg hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5",

        // Hero buttons for dark backgrounds - bright gradient with depth
        hero: "bg-gradient-to-br from-white via-white to-surface text-navy shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 active:translate-y-0 font-bold",
        
        // Hero outline - translucent glass effect
        "hero-outline": "border-2 border-white/40 text-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/20 hover:to-white/10 hover:border-white/60 hover:-translate-y-0.5 shadow-lg shadow-black/15 font-semibold",
        
        // Dark navy button with rich gradient
        navy: "bg-gradient-to-br from-slate via-navy to-navy-light text-white shadow-lg shadow-navy/25 hover:shadow-xl hover:shadow-navy/35 hover:-translate-y-0.5 font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-base tracking-wide font-bold",
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
