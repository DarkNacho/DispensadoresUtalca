// librerias necesarias
const gpio = require('onoff').gpio
const http = require("http");
const fs = require('fs').promises;

//constantes para host y puerto de uso
const host = 'localhost';
const port = 8000;

/**
 * Corre la respuesta del servidor entregando un html
 * @param {*} req no usado, recibe solicitudes html.
 * @param {*} res responde a la peticion con un html.
 */
const requestListener = function(req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

//funciones control de tablero

/**
 * Lee el estado actual del gpio (pin de la raspberry pi)
 * @param {numero} npin numero del gpio a leer
 * @returns retorna el estado del gpio, 1 esta encendido y 0 apagado
 */
function stateGpin(npin) {
    gpin = new gpio(npin, 'in')
    estado = gpin.readSync();
    if (estado == 1) {
        console.log("\n Gpin: " + npin + ", esta encendido\n")
    }
    console.log("\nBoton esta apagado\n")
    return estado;
}

/**
 * Escribe el estado encendido del gpio (pin de la raspberry pi)
 * @param {numero} npin numero del gpio a escribir
 * @returns void
 */
function gpinOn(npin) {
    gpin = new gpio(npin, 'in')
    gpin.writeSync(1)
    console.log("\n Gpin: " + npin + ", se ha encendido\n")
}

/**
 * Escribe el estado apagado del gpio (pin de la raspberry pi)
 * @param {numero} npin numero del gpio a escribir
 * @returns void
 */
function gpinOff(npin) {
    gpin = new gpio(npin, 'in')
    gpin.writeSync(0)
    console.log("\n Gpin: " + npin + ", se ha apagado\n")
}