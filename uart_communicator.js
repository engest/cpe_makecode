let data = ""
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
forever(function () {
    if (input.buttonA.isPressed()) {
        console.log("Sending 'R' Red")
        serial.writeString("R")
        pins.LED.digitalWrite(true)
        control.waitMicros(200000)
        pins.LED.digitalWrite(false)
    }
    if (input.buttonB.isPressed()) {
        console.log("Sending 'R' Red")
        serial.writeString("B")
        pins.LED.digitalWrite(true)
        control.waitMicros(200000)
        pins.LED.digitalWrite(false)
    }
    if (input.switchRight()) {
        light.setAll(0x000000)
    }
})
