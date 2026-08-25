let fortune = 0
input.onGesture(Gesture.Shake, function () {
    fortune = Math.randomRange(1, 3)
    if (fortune == 1) {
        light.showRing(
        `green green green green green green green green green green`
        )
        music.baDing.play()
    } else if (fortune == 2) {
        light.showRing(
        "red red red red red red red red red red"
        )
        music.wawawawaa.play()
    } else {
        light.showRing(
        `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
        )
        music.magicWand.play()
    }
})
forever(function () {
	
})
