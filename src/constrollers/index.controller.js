const controller = {}

controller.index = (req, res) => {
    res.send('la conexion ha sido correcta desde index.controller')
}

controller.n1000 = (req, res) => {
    res.send('tu reporte del dispensador 1 se ha enviado')
}

controller.n2000 = (req, res) => {
    res.send('tu reporte del dispensador 2 se ha enviado')
}

module.exports = controller