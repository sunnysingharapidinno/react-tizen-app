import styled from "styled-components"

export const PageWrap = styled.main`
    background: ${(props) => props.theme.primary};
    height: 100%;
    width: 100%;
    max-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: minmax(96px, 120px) minmax(0,1fr);

`
