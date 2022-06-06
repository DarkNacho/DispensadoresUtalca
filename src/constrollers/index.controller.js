const controller = {}
const Gpio = require('onoff').Gpio

var led = new Gpio(21, 'out')

var pushButton = new Gpio(20, 'in','both')


controller.index = (req, res) => {
    res.send('la conexion ha sido correcta desde index.controller')
}

controller.n1000 = (req, res) => {
	led.writeSync(1);
    res.send('prender led')
}

controller.n2000 = (req, res) => {
	led.writeSync(0);
    res.send('apagar led')
}

controller.avisar = (req, res) =>
{
	const { id } = req.params
	//get led b id here then write HIGH
	led.writeSync(1);
    res.send('encender led en id: ' + id)
	
}

pushButton.watch(function (err, value){
	if(err) {
		console.error('hay un error', err)
		return
	}
	led.writeSync(value)
	})

module.exports = controller
