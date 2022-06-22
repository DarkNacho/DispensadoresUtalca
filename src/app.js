const express = require("express");
const path = require('path')
const app = express();
const requestIp = require('request-ip');
const rateLimit = require('express-rate-limit')

//constantes para host y puerto de uso
const host = 'localhost';
const port = 8000;
const limiter = rateLimit({
    max: 20,
    windowMs: 60 * 60 * 1000,
    message: "Demasiadas conexiones desde esta ip"
});

//Routes
app.use(require('./routes/index.routes'))

//archivos estaticos
app.use(express.static(path.join(__dirname, '../public')))

//delimitador del servidor->15min, si pasa 20 peticiones
app.use(limiter);

app.use((req, res) => {
    //res.sendFile(path.join(__dirname, '../public/404/404.html'))
    const ip = requestIp(req);
    res.send(`Client IP Address: ${ip}`);
})

//escucha del servidor
app.listen(port, host, () => {
    console.log("Servidor a la espera en el puerto " + port)

})