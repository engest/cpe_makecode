let x_accel = 0
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
function clearLeft () {
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(1, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(3, 0x000000)
    light.setPixelColor(4, 0x000000)
}
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < -1000) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0xff0000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < -640) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0x000000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0x000000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel > 1000) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0xff0000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 640) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 0) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0x000000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0x000000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else {
        light.setAll(0x00ff00)
    }
    console.log(x_accel)
    control.waitMicros(40000)
})
