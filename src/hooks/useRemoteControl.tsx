import { useEffect } from "react"

export const useRemoteControl = (handlers: {
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onEnter?: () => void
  onBack?: () => void
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log("Key pressed:", event.keyCode, event.key) // Debug log

      // Prevent default behavior for all navigation keys
      event.preventDefault()
      event.stopPropagation()

      switch (event.keyCode) {
        case 38: // Arrow Up
          handlers.onArrowUp?.()
          break
        case 40: // Arrow Down
          handlers.onArrowDown?.()
          break
        case 37: // Arrow Left
          handlers.onArrowLeft?.()
          break
        case 39: // Arrow Right
          handlers.onArrowRight?.()
          break
        case 13: // Enter/OK
        case 32: // Space (sometimes mapped to OK)
          handlers.onEnter?.()
          break
        case 8: // Backspace (sometimes mapped to Back)
        case 27: // Escape
        case 10009: // Tizen Back
          handlers.onBack?.()
          break
      }
    }

    // Add event listeners to multiple targets
    document.addEventListener("keydown", handleKeyDown, true)
    window.addEventListener("keydown", handleKeyDown, true)

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true)
      window.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [handlers])
}
