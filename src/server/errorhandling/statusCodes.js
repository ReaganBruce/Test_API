
const httpStatusCodes = {
    OK: 200,
    DELETED: 200,
    BAD_REQUEST: 400,
    CREATED: 201,
    UPDATED: 201,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}

const httpMessages = {
    OK: "Success",
    DELETED: "Deleted",
    BAD_REQUEST: "Server cannot process this request",
    CREATED: "Request Created",
    UPDATED: "Request Updated",
    NOT_FOUND: "Not found",
    INTERNAL_SERVER: "Internal Server Error"
}


export default {
    httpStatusCodes,
    httpMessages
}