import React, { useRef, useEffect, useState } from "react"

interface FocusableProps {
  children: React.ReactNode
  onFocus?: () => void
  onBlur?: () => void
  onEnter?: () => void
  className?: string
  autoFocus?: boolean
}

export const Focusable: React.FC<FocusableProps> = ({
  children,
  onFocus,
  onBlur,
  onEnter,
  className = "",
  autoFocus = false,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus()
    }
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
    onFocus?.()
  }

  const handleBlur = () => {
    setIsFocused(false)
    onBlur?.()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      // Enter key
      event.preventDefault()
      onEnter?.()
    }
  }

  return (
    <div
      ref={ref}
      tabIndex={0}
      className={`${className} ${isFocused ? "focused" : ""}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}
