input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.clear()
})
input.onGesture(Gesture.Shake, function () {
    music.siren.play()
    light.showRing(
    "red red red red red red red red red red"
    )
})
forever(function () {
	
})
