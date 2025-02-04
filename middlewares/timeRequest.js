const timeRequest = (request, response, next) => {
    const start = Date.now();

    response.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`La solicitud a ${request.originalUrl} demoró ${duration} ms`);
    });

    next()
}
export default timeRequest