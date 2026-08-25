# Gadget Step Tracker

## Introduction @unplugged
Today we are building a wearable Step Tracker! Every time you take a step, the accelerometer will feel the bump and add it to a running total. We will use a special block that turns your LED ring into a progress bar so you can see how close you are to your goal!

## Step 1: Create a Steps Variable
First, our gadget needs a way to count. 
Go to the **VARIABLES** drawer, click `Make a Variable`, and name it `steps`. 

## Step 2: The Shake (Step) Event
Open the **INPUT** drawer and drag an `||input:on shake||` block into your workspace. This will trigger every time you take a heavy step.

```blocks
input.onGesture(Gesture.Shake, function () {
	
})
```

## Step 3: Count Up!
Every time the gadget shakes, we need to add 1 to our variable.
Open the **VARIABLES** drawer, grab the `||variables:change steps by 1||` block, and snap it inside your `||input:on shake||` block. 

```blocks
let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
```

## Step 4: Graph the Progress
Let's light up the LEDs to show our progress. 
Open the **LIGHT** drawer, grab the `||light:graph 0 ⨁||` block, and snap it under your variable block. Click the ⨁ to make it a `||light:graph 0 up to 0||`.  
Go to the **VARIABLES** drawer, grab the round `||variables:steps||` block, and drop it into the first `0`. Change the second `0` to `20`. (This means the ring will be completely full when you reach 20 steps!)

```blocks
let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
    light.graph(steps, 20)
})
```

## Step 5: Add a Reset Button
What happens when you reach your goal? We need a way to restart!
Open the **INPUT** drawer and drag the `||input:on button A click||` block into your workspace. 
Inside it, add a `||variables:set steps to 0||` block and a `||light:clear||` block so the lights turn off.

```blocks
let steps = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    steps = 0
    light.clear()
})
```

## Step 6: Test your Tracker!
Click the "SHAKE" button on the simulator repeatedly. Watch the lights fill up the ring! Click Button A to reset it. Download it to your gadget and go for a walk!
