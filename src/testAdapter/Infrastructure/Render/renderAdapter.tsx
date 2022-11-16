import React from 'react'
import { render as renderTestingLibrary, RenderResult, RenderOptions } from '@testing-library/react'
import { StyledComponentsThemeProviderMock } from '../../Style/Theme'

export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
  return renderTestingLibrary(
    <StyledComponentsThemeProviderMock theme={{
      colors: {}
    }}>
      {ui}
    </StyledComponentsThemeProviderMock>,
    options
  )
}
