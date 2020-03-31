class MissingParamError extends Error {
    constructor(paramName, status){
        super(`Missing param: ${paramName}`);
        this.name = 'MissingParamError';
        this.status = status || 400
    }
}

module.exports = MissingParamError;