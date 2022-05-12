const express = require("express");
const path = require('path')
const app = express();

//constantes para host y puerto de uso
const host = 'localhost';
const port = 8000;

//Routes
app.use(require('./routes/index.routes'))

//archivos estaticos
app.use(express.static(path.join(__dirname, '../public')))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404/404.html'))
})

//escucha del servidor
app.listen(port, () => {
    console.log("Servidor a la espera en el puerto " + port)
})