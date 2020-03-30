class MissingParamError extends Error {

    constructor(paramName){
        super(`Missing param: ${paramName}`);
        this.name = 'MissingParamError';
        this.status = 400
    }

}

module.exports = MissingParamError;