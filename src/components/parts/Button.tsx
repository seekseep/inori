import { HTMLAttributes } from "react";
import button, { ButtonVariantsProps } from "../../variants/button";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonVariantsProps

export default function Button ({ variant, size, icon, ...props }: ButtonProps) {
  const disabled = !!props["aria-disabled"]
  return (
    <button className={button({ variant, size, disabled, icon })} {...props} />
  )
}
