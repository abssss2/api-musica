const ERROR_HANDLERS = {
    //nombre de errores contemplados aca ->
    /*-----------------*/

    defaultError: (response, error) => {
        response
            .status(500)
            .json({
                success: false,
                message: error.message
            })
    }
}
const errorHandler = (error, _request, response, _next) => {
    console.log('Error Handler')
    const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
    handler(response, error)
}
export default errorHandler