import React from 'react'
import { ThemeProvider } from 'styled-components'

type Props = {
  children: React.ReactElement
  theme: object
}

export const StyledComponentsThemeProviderMock: React.FC<Props> = (props) => {
  return <ThemeProvider {...props} />
}
