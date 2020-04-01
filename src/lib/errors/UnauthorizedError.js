class UnauthorizedError extends Error {
  constructor (status) {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
    this.status = status || 401
  }
}

module.exports = UnauthorizedError
