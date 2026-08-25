let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
    light.graph(steps, 20)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    steps = 0
    light.clear()
})
forever(function () {
	
})
