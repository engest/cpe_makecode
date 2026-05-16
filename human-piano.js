input.touchA1.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xff0000)
    music.playTone(262, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA2.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xff8000)
    music.playTone(294, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA3.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xffff00)
    music.playTone(330, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA4.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x00ff00)
    music.playTone(349, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA5.onEvent(ButtonEvent.Down, function () {
    light.setAll(0x0000ff)
    music.playTone(392, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA6.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xff00ff)
    music.playTone(440, music.beat(BeatFraction.Half))
    light.clear()
})
input.touchA7.onEvent(ButtonEvent.Down, function () {
    light.setAll(0xff0080)
    music.playTone(494, music.beat(BeatFraction.Half))
    light.clear()
})
forever(function () {
	
})
