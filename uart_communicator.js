let data = ""
input.buttonA.onEvent(ButtonEvent.Click, function () {
    console.log("Sending 'R' Red")
    serial.writeString("R")
    pins.LED.digitalWrite(true)
    control.waitMicros(200000)
    pins.LED.digitalWrite(false)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    console.log("Sending 'R' Red")
    serial.writeString("B")
    pins.LED.digitalWrite(true)
    control.waitMicros(200000)
    pins.LED.digitalWrite(false)
})
serial.onEvent(SerialEvent.DataReceived, function () {
    data = serial.readString()
    if (data == "R") {
        light.showRing(
        "red red red red red red red red red red"
        )
    } else if (data == "B") {
        light.showRing(
        `blue blue blue blue blue blue blue blue blue blue`
        )
        control.waitMicros(200000)
    }
})
