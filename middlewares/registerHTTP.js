import fs from 'fs';

const registerHTTP = (request, response, next) => {
    const date = new Date().toDateString();

    const register = `[Date: ${date}] - [Method: ${request.method}] - [Status: ${response.statusCode}]  `;

    fs.appendFile('request.txt', register, { encoding: 'utf8' }, (err) => {
        if (err) {
            console.error('Error al escribir en request.txt:', err);
        }


        next();
    });
};

export default registerHTTP;
