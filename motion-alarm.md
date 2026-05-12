# CPX Motion Alarm

## Introduction @unplugged
Welcome to class! Today we are going to use block coding to turn our Circuit Playground Express into a motion alarm. 
When someone bumps your device, it will flash red and sound an alarm!

## Step 1: The Shake Trigger
First, we need to tell the CPX to listen for movement. 
Open the **Input** drawer and drag an `||input:on shake||` block into your workspace. 

```blocks
input.onGesture(Gesture.Shake, function () {
	
})
```

## Step 2: Sound the Siren!
Now, let's make some noise! 
Open the **Music** drawer. Drag the `||music:play sound ba ding||` block for the siren and snap it inside your `||input:on shake||` block. Select the `||siren||` sound.

```blocks
input.onGesture(Gesture.Shake, function () {
    music.siren.play()
})
```

## Step 3: Red Alert Lights
An alarm needs flashing lights! 
Open the **Light** drawer and drag a `||light:show ring||` block under your music block. 
Change the colors so all the lights are red.

```blocks
input.onGesture(Gesture.Shake, function () {
    music.siren.play()
    light.showRing(
    "red red red red red red red red red red"
    )
})
```

## Step 4: Clear the Alarm
We need a way to turn the alarm off and reset the lights after it gets triggered.
Open the **Input** drawer and grab an `||input:on button A click||` block.
Then, open the **Light** drawer and put a `||light:clear||` block inside it.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.clear()
})
```

## Step 5: Test it out!
Look at the virtual CPX simulator on the screen. Click the white "SHAKE" button to test your alarm, and click Button A to clear the lights.
If it works, you are ready to download the code to your real Circuit Playground Express!
