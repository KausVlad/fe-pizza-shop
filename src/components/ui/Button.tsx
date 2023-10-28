import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./buttonStyles";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = VariantProps<typeof buttonStyles> &
  ComponentProps<"button">;

export default function Button({
  variant,
  paddingSize,
  className,
  ...props
}: TButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, paddingSize }), className)}
    />
  );
}
