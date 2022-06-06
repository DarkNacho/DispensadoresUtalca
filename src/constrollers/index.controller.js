const controller = {}
const Gpio = require('onoff').Gpio

var led1 = new Gpio(21, 'out')
var pushButton1 = new Gpio(20, 'in','both')


var led2 = new Gpio(26, 'out')
var pushButton2 = new Gpio(16, 'in','both')


controller.index = (req, res) => {
    res.send('la conexion ha sido correcta desde index.controller')
}

controller.n1000 = (req, res) => {
	led1.writeSync(1);
    res.send('prender led 1')
}

controller.n2000 = (req, res) => {
	led2.writeSync(1);
    res.send('prenderled 2')
}

controller.avisar = (req, res) =>
{
	const { id } = req.params
	//get led b id here then write HIGH
	//led.writeSync(1);
    res.send('encender led en id: ' + id)
	
}

pushButton1.watch(function (err, value){
	if(err) {
		console.error('hay un error', err)
		return
	}
	led1.writeSync(value)
	})
	
	
pushButton2.watch(function (err, value){
	if(err) {
		console.error('hay un error', err)
		return
	}
	led2.writeSync(value)
	})

module.exports = controller
