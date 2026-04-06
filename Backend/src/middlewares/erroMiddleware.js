export function errorMiddleware(error, req, res, next) {

    const isOperational = error.statusCode

    return res.status(error.statusCode || 500).json({
        success: false,
        message: isOperational
            ? error.message
            : "Erro interno no servidor"
    })
}