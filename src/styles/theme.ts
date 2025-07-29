interface ThemeWithStates {
  [propName: string]: string
}

interface IColors {
  darkNavy: string
  grey: string
  periwinkle: string
  surfaceWhite: string
}

const colors: IColors = {
  darkNavy: "#1B1D26",
  grey: "#313544",
  periwinkle: "#5D88FF",
  surfaceWhite: "#F5F5F5",
}

export interface ITheme {
  primary: string
  secondary: string
  tertiary: string
  light: string
}

const darkTheme: ITheme = {
  primary: colors.darkNavy,
  secondary: colors.grey,
  tertiary: colors.periwinkle,
  light: colors.surfaceWhite,
}

export const getTheme = () => darkTheme
