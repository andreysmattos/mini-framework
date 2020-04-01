class ServerError extends Error {
  constructor (status) {
    super('ServerError')
    this.name = 'ServerError'
    this.status = status || 500
  }
}

module.exports = ServerError
