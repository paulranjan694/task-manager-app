

class CustomAPIError extends Error{
    constructor(msg,statusCode){
        super(msg);
        this.statusCode = statusCode;
    }
}

const customErrorHandler = (msg,statusCode)=>{
    return new CustomAPIError(msg,statusCode);
}

module.exports = {customErrorHandler, CustomAPIError}