import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        w-full
        rounded-lg
        p-2
        font-semibold
        transition
        duration-200
        cursor-pointer
        `,
        
        variant === "primary" &&
          `
          bg-lime-400
          text-black
          hover:bg-lime-500
          `,

        variant === "secondary" &&
          `
          bg-gray-200
          text-black
          hover:bg-gray-300
          `,

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}