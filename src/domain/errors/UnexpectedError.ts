export class UnexpectedError extends Error {
  constructor () {
    super('Something unexpeted happened. Try again later.')
    this.name = 'UnexpectedError'
  }
}
