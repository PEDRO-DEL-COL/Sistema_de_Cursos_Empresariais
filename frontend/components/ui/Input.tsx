import { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        `
        w-full
        rounded-lg
        bg-gray-100
        p-2
        text-black
        outline-none
        transition
        focus:ring-2
        focus:ring-[#99CB38]
        `,
        className
      )}
      {...props}
    />
  )
}