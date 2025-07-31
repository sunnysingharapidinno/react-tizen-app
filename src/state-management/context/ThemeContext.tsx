import React, { createContext, useMemo, useState, ReactNode } from "react"
import { getTheme } from "styles/theme"
import { ThemeProvider } from "styled-components"
import { Themes } from "enums/theme.enum"
import { GlobalStyle } from "styles/globalStyle"

const darkTheme = { ...getTheme(), selected: Themes.DARK }

interface IThemeContext {
  currentTheme: typeof darkTheme
}

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: darkTheme,
})

interface IThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider: React.FC<IThemeContextProviderProps> = ({
  children,
}) => {
  const [currentTheme] = useState(darkTheme)

  const contextValue = useMemo(() => ({ currentTheme }), [currentTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
