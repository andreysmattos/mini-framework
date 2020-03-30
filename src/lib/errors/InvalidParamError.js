class InvalidParamError extends Error {
    constructor(paramName){
        super(`Invalid param: ${paramName}`);
        this.name = 'InvalidParamError';
        this.status = 400
    }
}

module.exports = InvalidParamError;