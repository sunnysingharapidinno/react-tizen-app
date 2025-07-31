import styled, { css, keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideInLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`

// Styled Components
export const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, #000000 0%, #1a1a1a 100%);
  min-height: 100vh;
  color: white;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  overflow: hidden;
`

// Sidebar Styles
export const SidebarWrap = styled.div<{ $isFocused: boolean }>`
  width: ${(props) => (props.$isFocused ? "250px" : "80px")};
  background: linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-right: 2px solid ${(props) =>
    props.$isFocused ? "#e50914" : "rgba(255, 255, 255, 0.1)"};
  padding: 2rem 1rem;
  transition: all 0.3s ease;
  z-index: 100;
  animation: ${slideInLeft} 0.5s ease-out;
  
  ${(props) =>
    props.$isFocused &&
    css`
    box-shadow: 2px 0 20px rgba(229, 9, 20, 0.3);
  `}
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

export const SidebarLogo = styled.div<{ $expanded: boolean }>`
  font-size: ${(props) => (props.$expanded ? "1.5rem" : "1rem")};
  font-weight: bold;
  color: #e50914;
  margin-bottom: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  ${(props) =>
    !props.$expanded &&
    css`
    writing-mode: vertical-rl;
    text-orientation: mixed;
  `}
`

// Content Styles
export const ContentArea = styled.div<{ $sidebarFocused: boolean }>`
  flex: 1;
  opacity: ${(props) => (props.$sidebarFocused ? 0.3 : 1)};
  transition: opacity 0.3s ease;
  overflow-y: auto;
  height: 100vh;
`

export const Header = styled.header`
  padding: 2rem 4rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
  position: relative;
  z-index: 10;
`

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #e50914;
  margin: 0;
  letter-spacing: -1px;
`

export const Main = styled.main`
  padding: 0 4rem 4rem;
  animation: ${fadeIn} 0.8s ease-out;
`

export const CarouselSection = styled.section<{ $isActive: boolean }>`
  margin-bottom: 3rem;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  transition: opacity 0.3s ease;
  
  ${(props) =>
    props.$isActive &&
    css`
    transform: scale(1.02);
    z-index: 5;
    position: relative;
  `}
`

export const CarouselTitle = styled.h2<{ $isActive: boolean }>`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-left: 1rem;
  color: ${(props) => (props.$isActive ? "#ffffff" : "#cccccc")};
  transition: all 0.3s ease;
  
  ${(props) =>
    props.$isActive &&
    css`
    color: #e50914;
    text-shadow: 0 0 10px rgba(229, 9, 20, 0.3);
  `}
`

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`

export const CarouselWrapper = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateX(${(props) => props.$translateX}px);
  gap: 1rem;
  padding: 0 1rem;
`

export const MediaCard = styled.div<{
  $isFocused: boolean
  $isInActiveCarousel: boolean
}>`
  min-width: 300px;
  height: 169px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(135deg, #333, #222);
  
  ${(props) =>
    props.$isFocused &&
    css`
    transform: scale(1.15);
    z-index: 20;
    box-shadow: 0 10px 30px rgba(229, 9, 20, 0.4);
    border: 3px solid #e50914;
  `}
  
  ${(props) =>
    !props.$isInActiveCarousel &&
    css`
    opacity: 0.6;
  `}
  
  &:hover {
    transform: ${(props) => (props.$isFocused ? "scale(1.15)" : "scale(1.05)")};
  }
`

export const MediaImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-color: #333;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      #f0f0f0 25%,
      transparent 25%,
      transparent 50%,
      #f0f0f0 50%,
      #f0f0f0 75%,
      transparent 75%
    );
    background-size: 20px 20px;
    opacity: 0.1;
    animation: ${shimmer} 2s infinite linear;
  }
`

export const MediaOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
  padding: 1rem;
  transform: translateY(${(props) => (props.$visible ? "0" : "100%")});
  transition: transform 0.3s ease;
`

export const MediaTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  color: white;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
`

export const MediaMeta = styled.div`
  font-size: 0.8rem;
  color: #cccccc;
  display: flex;
  gap: 1rem;
`
