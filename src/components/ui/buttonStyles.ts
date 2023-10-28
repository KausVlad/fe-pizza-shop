import { cva } from "class-variance-authority";

export const buttonStyles = cva(["transition-colors active:text-red-600"], {
  variants: {
    variant: {
      default: "bg-red-600",
      ghost:
        "capitalize text-base font-semibold hover:scale-105 transition-transform",
      ghostWhite: "text-base font-extrabold text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
