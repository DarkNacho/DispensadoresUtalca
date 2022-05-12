const gpio = require('onoff').gpio

//funciones control de tablero
/**
 * Lee el estado actual del gpio (pin de la raspberry pi)
 * @param {numero} npin numero del gpio a leer
 * @returns retorna el estado del gpio, 1 esta encendido y 0 apagado
 */
function gpinState(npin) {
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

module.exports = {
    gpinOff: gpinOff,
    gpinOn: gpinOn,
    gpinState: gpinState
}