datalogger.onLogFull(function () {
    datalogger.log(
    datalogger.createCV("2", 1),
    datalogger.createCV("", input.lightLevel()),
    datalogger.createCV("", 0),
    datalogger.createCV("", 0)
    )
    led.stopAnimation()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
	
})
