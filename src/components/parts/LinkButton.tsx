import button, { ButtonVariantsProps } from "../../variants/button";
import { Link, LinkProps } from "react-router";

type LinkButtonProps = LinkProps & ButtonVariantsProps

export default function LinkButton ({ variant, size, icon, ...props }: LinkButtonProps) {
  const disabled = !!props["aria-disabled"]
  return (
    <Link className={button({ variant, size, disabled, icon })} {...props} />
  )
}
