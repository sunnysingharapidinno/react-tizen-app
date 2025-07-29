class NavigationManager {
  private readonly focusableElements: HTMLElement[] = []
  private currentIndex = 0

  registerFocusable(element: HTMLElement) {
    this.focusableElements.push(element)
  }

  unregisterFocusable(element: HTMLElement) {
    const index = this.focusableElements.indexOf(element)
    if (index > -1) {
      this.focusableElements.splice(index, 1)
    }
  }

  focusNext() {
    if (this.focusableElements.length === 0) return

    this.currentIndex = (this.currentIndex + 1) % this.focusableElements.length
    this.focusableElements[this.currentIndex]?.focus()
  }

  focusPrevious() {
    if (this.focusableElements.length === 0) return

    this.currentIndex =
      this.currentIndex === 0
        ? this.focusableElements.length - 1
        : this.currentIndex - 1
    this.focusableElements[this.currentIndex]?.focus()
  }

  focusFirst() {
    if (this.focusableElements.length > 0) {
      this.currentIndex = 0
      this.focusableElements[0]?.focus()
    }
  }
}

export const navigationManager = new NavigationManager()
