input.onLightConditionChanged(LightCondition.Bright, function () {
    for (let i = 0; i < 4; i++) {
        light.setAll(0xff0000)
        music.playTone(880, music.beat(BeatFraction.Half))
        light.setAll(0x0000ff)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    light.clear()
})
forever(function () {
	
})
