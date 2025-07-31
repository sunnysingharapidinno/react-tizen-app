import styled, { css, keyframes } from "styled-components"

interface ISideBar {
  isSelected?: boolean
  isFocused?: boolean
}

export const SidebarWrap = styled.aside<ISideBar>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  flex: 1;
  max-width: ${({ isFocused }) => (isFocused ? "246px" : "80px")};
  min-width: ${({ isFocused }) => (isFocused ? "246px" : "80px")};
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const SideBarItem = styled.div<{
  $isFocused: boolean
  $sidebarExpanded: boolean
}>`
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  
  background: ${(props) =>
    props.$isFocused
      ? "linear-gradient(135deg, #e50914, #b20710)"
      : "transparent"};
  
  color: ${(props) => (props.$isFocused ? "white" : "#cccccc")};
  
  transform: ${(props) => (props.$isFocused ? "scale(1.05)" : "scale(1)")};
  
  ${(props) =>
    props.$isFocused &&
    css`
    box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  `}
  
  &:hover {
    background: ${(props) =>
      props.$isFocused
        ? "linear-gradient(135deg, #e50914, #b20710)"
        : "rgba(255, 255, 255, 0.1)"};
  }
  
  &::before {
    content: "▶";
    opacity: ${(props) => (props.$sidebarExpanded ? 1 : 0)};
    transition: opacity 0.3s ease;
    margin-right: ${(props) => (props.$sidebarExpanded ? "0" : "-1rem")};
  }
`

interface IMenuWrapperProps {
  $hasFocusedChild: boolean
  $expanded: boolean
}

export const MenuWrapper = styled.div<IMenuWrapperProps>`
  flex: 1;
  max-width: ${({ $expanded }) => ($expanded ? "246px" : "80px")};
  min-width: ${({ $expanded }) => ($expanded ? "246px" : "80px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $hasFocusedChild }) =>
    $hasFocusedChild ? "#4e4181" : "#362C56"};
  padding-top: 37px;
  transition: max-width 0.3s ease, min-width 0.3s ease;
`
