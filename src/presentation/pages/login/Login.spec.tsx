import React from 'react'
import { render } from '@/testAdapter'
import Login from './Login'

describe('Login unit tests', () => {
  it('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
