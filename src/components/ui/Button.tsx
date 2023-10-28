import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./buttonStyles";

type TButtonProps = VariantProps<typeof buttonStyles>;

export default function Button({ variant }: TButtonProps) {
  return <button className={buttonStyles({ variant })}>Button</button>;
}
