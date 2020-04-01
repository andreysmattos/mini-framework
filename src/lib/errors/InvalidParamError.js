class InvalidParamError extends Error {
  constructor (paramName, status) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
    this.status = status || 400
  }
}

module.exports = InvalidParamError
