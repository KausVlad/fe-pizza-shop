import { cva } from "class-variance-authority";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: "",
      ghost:
        "capitalize text-base font-semibold hover:scale-105 transition-transform",
      ghostWhite: "text-base font-extrabold text-white hover:text-gray-300",
      roundedGray:
        "rounded-full font-extrabold bg-neutral-600 hover:bg-neutral-500",
      roundedRed:
        "text-white rounded-full font-semibold bg-red-600 hover:bg-red-800",
      toggle: "rounded-full border border-neutral-400 py-1",
    },

    selectedStatus: {
      true: "bg-neutral-600 text-white",
      false: "",
    },

    paddingSize: {
      default: "",
      small: "py-1 px-2",
      medium: "py-3 px-8",
      large: "py-3 px-10",
    },
  },
  defaultVariants: {
    variant: "default",
    paddingSize: "default",
  },
});
