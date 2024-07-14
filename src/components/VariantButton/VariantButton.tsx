import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import ButtonVariantStyles from "./VariantButton.module.css"

type ButtonVariant = "outline" | "solid" | "ghost"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "outline":
      return ButtonVariantStyles["btn-outline"]
    case "ghost":
      return ButtonVariantStyles["btn-ghost"]
    default:
      return ButtonVariantStyles["btn"]
  }
}

export const VariantButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, variant = "solid", className, ...rest } = props

    const styles = twMerge(getVariant(variant), className)

    return (
      <button ref={ref} className={styles} {...rest}>
        {children}
      </button>
    )
  }
)
