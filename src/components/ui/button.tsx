import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium gradient button
        premium: "bg-gradient-to-r from-electric to-electric-light text-white hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.4)] hover:-translate-y-0.5",
        // Dark solid button
        dark: "bg-charcoal text-white hover:bg-charcoal-light hover:shadow-lg hover:-translate-y-0.5",
        // Outline with electric accent
        "premium-outline": "border-2 border-electric text-electric hover:bg-electric hover:text-white hover:-translate-y-0.5",
        // Glass button
        glass: "backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-glass",
        // Teal accent
        teal: "bg-teal text-white hover:bg-teal-light hover:shadow-lg hover:-translate-y-0.5",
        // Legacy variants for compatibility
        hero: "bg-charcoal text-primary-foreground hover:bg-charcoal-light font-medium hover:shadow-lg hover:-translate-y-0.5",
        "hero-outline": "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-primary-foreground font-medium hover:-translate-y-0.5",
        navy: "bg-electric text-primary-foreground hover:bg-electric-light font-medium hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-base",
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
