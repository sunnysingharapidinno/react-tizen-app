import React, { useState } from "react"
import { useRemoteControl } from "../hooks/useRemoteControl"
import { Focusable } from "./Focusable"

export const MenuComponent: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const menuItems = ["Home", "Movies", "TV Shows", "Settings"]

  useRemoteControl({
    onArrowUp: () => {
      setSelectedIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1))
    },
    onArrowDown: () => {
      setSelectedIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1))
    },
    onEnter: () => {
      console.log(`Selected: ${menuItems[selectedIndex]}`)
    },
    onBack: () => {
      // Handle back navigation
      console.log("Back pressed")
    },
  })

  return (
    <div className='menu-container'>
      {menuItems.map((item, index) => (
        <Focusable
          key={item}
          autoFocus={index === 0}
          className={`menu-item ${selectedIndex === index ? "selected" : ""}`}
          onEnter={() => console.log(`Clicked: ${item}`)}>
          {item}
        </Focusable>
      ))}
    </div>
  )
}
