import styled from "styled-components"
import { activeStyle, defaultStyle } from "styles/sharedStyles"

interface MenuItemBoxProps {
  isFocused: boolean
  isExpanded: boolean
  isActive: boolean
}

export const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: ${({ isExpanded }) => (isExpanded ? "100%" : "51px")};
  height: 51px;
${(props) => (props?.isFocused ? activeStyle : defaultStyle)}    
  display: flex;
  align-items: center;
  justify-content: ${({ isExpanded }) =>
    isExpanded ? "flex-start" : "center"};
  padding: ${({ isExpanded }) => (isExpanded ? "0 15px" : "0")};
  transition: width 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  position: relative;
`

export const ActiveIndicator = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;  
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.3s ease;
`

export const MenuItemTitle = styled.span<{ $expanded: boolean }>`  
  font-family: 'Segoe UI';
  font-size: 16px;
  font-weight: 500;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transition: opacity 0.3s ease;
  white-space: nowrap;
`

export const MenuItemIcon = styled.div<{
  isExpanded: boolean
  $iconType: string
}>`
  width: 24px;
  height: 24px;
  margin-right: ${({ isExpanded: $expanded }) => ($expanded ? "12px" : "0")};
  margin-left: ${({ isExpanded: $expanded }) => ($expanded ? "0" : "36px")};
  transition: margin-right 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  
  &::before {
    content: ${({ $iconType }) => {
      switch ($iconType) {
        case "home":
          return '"🏠"'
        case "movies":
          return '"🎬"'
        case "series":
          return '"📺"'
        case "sports":
          return '"⚽"'
        case "settings":
          return '"⚙️"'
        default:
          return '"📱"'
      }
    }};
  }
`
