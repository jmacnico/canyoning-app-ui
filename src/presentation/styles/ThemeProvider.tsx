import React from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'

type ThemeProviderProps = {
  children: React.ReactElement[]
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return (
    <ThemeProviderStyledComponents {...props} theme={{
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        background: '#F2F2F2',
        primary: '#880E4F',
        primaryDark: '#560027',
        primaryLight: '#BC477B'

      }
    }} />
  )
}

export default ThemeProvider
