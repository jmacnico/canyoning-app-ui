import React from 'react'
import GlobalStyleStyled from './GlobalStyle.styled'
import ThemeProvider from './ThemeProvider'

type StylesContainerProps = {
  children: React.ReactElement
}

const StylesContainer: React.FC<StylesContainerProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyleStyled />
      {children}
    </ThemeProvider>
  )
}

export default StylesContainer
