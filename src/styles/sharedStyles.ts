import { css } from "styled-components"

export const activeStyle = css`
background: ${(props) => props?.theme?.light};
color: ${(props) => props?.theme?.primary};


`

export const defaultStyle = css`
background: ${(props) => props?.theme?.primary};
color: ${(props) => props?.theme?.light};
`
