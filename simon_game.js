let pattern_length = 0
let pattern: number[] = []
let index_value = 0
let player_input: number[] = []
let result = 0
function generatePattern () {
    pattern_length = Math.randomRange(4, 6)
    console.logValue("pattern length", pattern_length)
    pattern = []
    for (let i = 0; i < pattern_length; i++) {
        index_value = Math.randomRange(0, 3)
        console.logValue("pattern item", index_value)
        pattern.push(index_value)
    }
}
function getPlayerInput () {
    player_input = []
    while (player_input.length != pattern_length) {
        if (input.touchA4.isPressed()) {
            player_input.push(0)
            displayBlip(0)
        } else if (input.touchA7.isPressed()) {
            player_input.push(1)
            displayBlip(1)
        } else if (input.touchA1.isPressed()) {
            player_input.push(2)
            displayBlip(2)
        } else if (input.touchA3.isPressed()) {
            player_input.push(3)
            displayBlip(3)
        }
    }
}
function showPattern () {
    for (let item of pattern) {
        displayBlip(item)
    }
    control.waitMicros(100000)
}
function displayBlip (index: number) {
    if (index == 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xffff00)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (index == 1) {
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0xff0000)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (index == 2) {
        light.setPixelColor(6, 0x00ff00)
        light.setPixelColor(7, 0x00ff00)
        music.playTone(660, music.beat(BeatFraction.Whole))
    } else if (index == 3) {
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0x0000ff)
        music.playTone(524, music.beat(BeatFraction.Whole))
    }
    light.clear()
}
function checkResult () {
    result = 0
    for (let index = 0; index <= pattern_length; index++) {
        if (player_input[index] == pattern[index]) {
            result = result + 0
        } else {
            result = result + 1
        }
    }
    if (result == 0) {
        control.runInParallel(function () {
            music.baDing.play()
            light.showAnimation(light.rainbowAnimation, 500)
        })
        control.waitMicros(3000000)
    } else {
        control.runInParallel(function () {
            music.wawawawaa.play()
            light.showRing(
            "red red red red red red red red red red"
            )
        })
        control.waitMicros(3000000)
    }
    light.clear()
    control.waitMicros(2000000)
}
forever(function () {
    generatePattern()
    showPattern()
    getPlayerInput()
    checkResult()
})
