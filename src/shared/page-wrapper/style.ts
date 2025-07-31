import styled from "styled-components"
import { defaultStyle } from "styles/sharedStyles"

export const PageWrap = styled.div`    
    ${defaultStyle}
    height: 100%;    
    font-family: 'Helvetica Neue', Arial, sans-serif;
`

export const MainContent = styled.div`
    display: flex;
    width: 100%;
    max-height: calc(100vh - 112px);
    max-width: 100vw;    
    min-height: calc(100vh - 112px) ;
`
