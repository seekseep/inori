import { tv } from "tailwind-variants"

export interface ButtonVariantsProps {
  icon?: boolean
  size?: 'small' | 'medium' | 'large' | 'xl'
  variant?: 'primary' | 'secondary' | 'link'
  disabled?: boolean
}

const button = tv({
  base: "block text-center",
  variants: {
    icon: {
      true: "",
      false: "",
    },
    size: {
      small: "rounded-sm",
      medium: "rounded",
      large: "rounded-lg",
      xl: "rounded-lg",
    },
    variant: {
      primary: "bg-blue-500 text-white active:bg-blue-600",
      secondary: "bg-gray-500 text-white",
      link: "text-blue-500 underline",
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  compoundVariants: [
    {
      variant: "primary",
      disabled: true,
      className: "bg-gray-300 text-gray-500",
    },
    { icon: true, size: "small", className: "p-3 text-md" },
    { icon: true, size: "medium", className: "p-4 text-lg" },
    { icon: true, size: "large", className: "p-5 text-xl" },
    { icon: true, size: "xl", className: "p-6 text-2xl" },
    { icon: false, size: "small", className: "px-2 py-1 text-sm" },
    { icon: false, size: "medium", className: "px-3 py-2 text-md" },
    { icon: false, size: "large", className: "px-4 py-3 text-lg" },
    { icon: false, size: "xl", className: "px-5 py-4 text-xl" },
  ]
})

export default button
