"use client"
import { useId } from "react"


type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type?: string
  disabled?: boolean
  error?: string
}

export const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  disabled,
  error,
}: InputProps) => {
  const id = useId()

  return (
    <div className="space-y-2">

      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-medium text-secondary tracking-tight"
      >
        {label}
        {required && (
          <span className="text-accent ml-1">*</span>
        )}
      </label>

      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full rounded-2xl px-4 py-3 text-sm
          bg-white
          border
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
          ${disabled
            ? "bg-gray-100 border-gray-200 text-muted cursor-not-allowed"
            : error
            ? "border-red-400 focus:ring-red-400/30"
            : "border-gray-300 hover:border-gray-400"
          }
        `}
      />

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}

    </div>
  )
}