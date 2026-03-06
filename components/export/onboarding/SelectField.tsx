"use client";
import { useId } from "react"


type SelectProps = {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  required?: boolean
  disabled?: boolean
  error?: string
  placeholder?: string
}

export const SelectField = ({
  label,
  value,
  onChange,
  options,
  required,
  disabled,
  error,
  placeholder = "Select",
}: SelectProps) => {
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

      {/* Select */}
      <div className="relative">
        <select
          id={id}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full appearance-none rounded-2xl px-4 py-3 text-sm
            bg-white border
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent
            ${disabled
              ? "bg-gray-100 border-gray-200 text-muted cursor-not-allowed"
              : error
              ? "border-red-400 focus:ring-red-400/30"
              : "border-gray-300 hover:border-gray-400"
            }
          `}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-muted">
          ▼
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}

    </div>
  )
}