class BadRequestError extends Error {
  constructor (status) {
    super('Bad Request')
    this.name = 'BadRequest'
    this.status = status || 400
  }
}

module.exports = BadRequestError
