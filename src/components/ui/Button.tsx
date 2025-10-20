import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// =================================================================
// 1. DEFINE BUTTON STYLES & VARIANTS WITH CVA
// =================================================================
const buttonVariants = cva(
  // --- Base classes applied to all buttons ---
  "inline-flex items-center justify-center font-semibold rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      // --- Variant styles ---
      variant: {
        primary:
          "bg-primary text-white border-transparent hover:bg-secondary transition-colors duration-0",
        secondary:
          "bg-foreground text-background border-transparent hover:bg-transparent hover:text-foreground hover:border-foreground transition-all duration-300 ease-out",
        subtle:
          "bg-background text-foreground border-transparent hover:bg-transparent hover:border-foreground transition-all duration-300 ease-out",
        // MODIFIED: Simplified to only handle color and transitions. Size is now handled below.
        icon: "border-white bg-transparent text-foreground hover:bg-foreground/10 transition-colors",
      },
      // --- Size variants now only control height and font size ---
      size: {
        small: "h-12 text-sm",
        large: "h-14 text-base",
      },
    },
    // --- ADDED: Compound variants to handle complex style combinations ---
    compoundVariants: [
      // Rule 1: Apply horizontal padding ONLY to the non-icon buttons.
      {
        variant: ["primary", "secondary", "subtle"],
        className: "px-8",
      },
      // Rule 2: Apply a specific width ONLY to icon buttons.
      {
        variant: "icon",
        size: "small",
        className: "w-12", // 48px width for small icon button
      },
      {
        variant: "icon",
        size: "large",
        className: "w-14", // 56px width for large icon button
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);

// =================================================================
// 2. DEFINE PROPS INTERFACE
// =================================================================
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// =================================================================
// 3. CREATE THE BUTTON COMPONENT
// =================================================================
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// <div className="flex items-center gap-4">
//   <Button variant="primary" size="small">Primary Small</Button>
//   <Button variant="primary" size="large">Primary Large</Button>
// </div>

// <div className="flex items-center gap-4">
//   <Button variant="secondary" size="small">Secondary Small</Button>
//   <Button variant="secondary" size="large">Secondary Large</Button>
// </div>

// <div className="flex items-center gap-4">
//   <Button variant="subtle" size="small">Subtle Small</Button>
//   <Button variant="subtle" size="large">Subtle Large</Button>
// </div>

// <div className="flex items-center gap-4">
//   <Button variant="icon" size="small">
//     <Star className="w-5 h-5" />
//   </Button>
//   <Button variant="icon" size="large">
//     <Star className="w-6 h-6" />
//   </Button>
// </div>

// <div className="flex items-center gap-4">
//     <Button variant="primary" size="small" disabled>
//         Disabled
//     </Button>
// </div>
