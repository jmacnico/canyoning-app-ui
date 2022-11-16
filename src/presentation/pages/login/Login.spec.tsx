import React from 'react'
import { render } from '@/testAdapter'
import Login from './Login'
import { cleanup, fireEvent, RenderResult } from '@testing-library/react'
import { IValidation } from '@/presentation/protocols/IValidation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements IValidation {
  errorMessage: string
  input: object
  Validate = (input: object): string => {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login unit tests', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut()
    const { getByTestId } = sut
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
  })

  it('Should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const { getByTestId } = sut
    const emailInput = getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email'
    })
  })

  it('Should call Validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const { getByTestId } = sut
    const emailInput = getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email'
    })
  })
})
