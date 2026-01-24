import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary gradient button - main CTA
        default: "bg-gradient-to-r from-electric to-electric-muted text-white shadow-lg shadow-electric/20 hover:shadow-xl hover:shadow-electric/30 hover:-translate-y-1 hover:brightness-110",
        
        // Solid charcoal - secondary CTA
        primary: "bg-charcoal text-white shadow-lg shadow-charcoal/20 hover:shadow-xl hover:shadow-charcoal/30 hover:-translate-y-1 hover:bg-slate",
        
        // Outline with gradient border effect
        outline: "border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white hover:-translate-y-1 hover:shadow-lg",
        
        // Secondary - subtle background
        secondary: "bg-surface text-charcoal hover:bg-border hover:-translate-y-0.5 shadow-sm",
        
        // Ghost - minimal
        ghost: "text-charcoal hover:bg-surface/80",
        
        // Link style
        link: "text-electric underline-offset-4 hover:underline p-0 h-auto font-medium",
        
        // Destructive
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg",

        // Glass effect button
        glass: "bg-white/70 backdrop-blur-xl border border-white/30 text-charcoal shadow-glass hover:bg-white/90 hover:-translate-y-1",

        // Hero buttons for dark backgrounds
        hero: "bg-gradient-to-r from-electric to-electric-muted text-white shadow-lg shadow-electric/30 hover:shadow-xl hover:shadow-electric/40 hover:-translate-y-1 hover:brightness-110 font-semibold",
        
        "hero-outline": "border-2 border-white/80 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-charcoal hover:-translate-y-1 hover:shadow-lg font-semibold",
        
        navy: "bg-gradient-to-r from-charcoal to-slate text-white shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold",
      },
      size: {
        default: "h-12 px-6 py-2.5",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-base font-semibold",
        icon: "h-11 w-11",
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
