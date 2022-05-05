const gpio = requite('onoff').gpio

var led = new gpio(21, 'in')


function ledOn() {
    led.writeSync(1)
    console.log("\nEl led se ha encendido\n")
}

function ledOff() {
    led.writeSync(0)
    console.log("\nEl led se ha apagado\n")
}


