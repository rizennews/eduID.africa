import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#1A73C3] text-white hover:bg-[#155ea0] shadow-sm hover:shadow-md active:scale-[0.98]",
        accent:
          "bg-[#DE4A1B] text-white font-semibold hover:bg-[#c43c12] shadow-sm hover:shadow-md active:scale-[0.98]",
        navy:
          "bg-[#0B357B] text-white hover:bg-[#092b63] border border-[#1A73C3]/30",
        secondary:
          "bg-[#0C1A30] text-slate-100 hover:bg-[#112444] border border-[#162C4E]",
        outline:
          "border border-[#162C4E] bg-transparent text-slate-200 hover:bg-[#0C1A30] hover:text-white",
        ghost:
          "text-slate-300 hover:bg-[#0C1A30] hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
