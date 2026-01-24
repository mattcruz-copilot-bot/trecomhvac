import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary gradient button - premium navy-teal gradient
        default: "bg-gradient-to-r from-navy to-navy-light text-white shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5 active:translate-y-0",
        
        // Primary with teal accent
        primary: "bg-gradient-to-r from-navy via-navy-light to-teal text-white shadow-lg shadow-navy/25 hover:shadow-xl hover:shadow-navy/35 hover:-translate-y-0.5 active:translate-y-0",
        
        // Teal accent button
        teal: "bg-gradient-to-r from-teal to-teal-light text-white shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/35 hover:-translate-y-0.5 active:translate-y-0",
        
        // Outline with refined styling
        outline: "border-2 border-navy/25 text-navy bg-transparent hover:bg-navy hover:text-white hover:border-navy hover:-translate-y-0.5 hover:shadow-lg transition-all",
        
        // Secondary - subtle background
        secondary: "bg-surface text-charcoal hover:bg-border hover:-translate-y-0.5 shadow-sm",
        
        // Ghost - minimal
        ghost: "text-charcoal-muted hover:text-charcoal hover:bg-surface/80",
        
        // Link style
        link: "text-navy underline-offset-4 hover:underline p-0 h-auto font-medium",
        
        // Destructive
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg",

        // Glass effect button
        glass: "bg-white/80 backdrop-blur-xl border border-white/40 text-charcoal shadow-glass hover:bg-white hover:shadow-elevated hover:-translate-y-0.5",

        // Hero buttons for dark backgrounds - bright and attention-grabbing
        hero: "bg-gradient-to-r from-white to-white/95 text-navy shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-1 active:translate-y-0 font-bold",
        
        "hero-outline": "border-2 border-white/50 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/70 hover:-translate-y-0.5 shadow-lg shadow-black/10 font-semibold",
        
        // Dark navy button for light backgrounds
        navy: "bg-gradient-to-r from-slate to-navy text-white shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5 font-semibold",
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
