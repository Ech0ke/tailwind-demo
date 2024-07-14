import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props

    const defaultStyles =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

    // const styles = twMerge(defaultStyles, className)

    return (
      <button ref={ref} className={defaultStyles} {...rest}>
        {children}
      </button>
    )
  }
)
