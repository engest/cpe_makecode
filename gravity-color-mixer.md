# Gravity Color Mixer

## Introduction @unplugged
Have you ever wondered how a video game controller knows exactly how far you are pushing the joystick? It doesn't just know "pushed" or "not pushed"—it reads the exact numbers! This turtorial will teach you how to use variables to move data in a program.

Today we are going to read the raw numbers from our accelerometer and store them in **Variables**. Then, we will use those variables to mix Red, Green, and Blue light. By tilting the gadget, you will be able to mix thousands of different colors using gravity!

## Step 1: Create the Color Variables
We need three variables to hold our three colors. 
Go to the **VARIABLES** drawer. Click `Make a Variable` and name it `redAmount`. Do this two more times to create `greenAmount` and `blueAmount`.

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
```

## Step 2: The Forever Loop
In our other projects, we used an event block like `on shake`. But gravity is pulling on us *all the time*. 
Open the **LOOPS** drawer, grab the `||loops:forever||` block, and drag it into your workspace. This block will read the sensors hundreds of times a second!

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
	
})
```

## Step 3: The Map Block (A Coding Superpower!)
The accelerometer gives us numbers between **-1024 and 1024**. But color values only go from **0 to 255**. We need the computer to shrink our gravity numbers to fit into our color numbers!
Open the **VARIABLES** drawer and grab the `||variables:set redAmount to 0||` block. Snap it inside your forever loop. 
Then, open the **MATH** drawer, grab the `||math:map 0 from low 0 high 1023 to low 0 high 4||` block, and drop it over the `0` in your set block. 

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
    redAmount = Math.map(0, 0, 1023, 0, 4)
})
```

## Step 4: Map the X Axis to Red
Let's connect the sensor. 
Open the **INPUT** drawer, grab the round `||input:acceleration x||` block, and drop it into the first `0` of your map block.
Now, fill in the ranges! We want to map from low **-1024** and high **1024**, to a low color of **0** and a high color of **255**. 

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
    redAmount = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 255)
})
```

## Step 5: Duplicate for Green (Y Axis) and Blue (Z Axis)
We need to do the same thing for our other two colors. 
Right-click your `set redAmount` block and select **Duplicate**. 
In the new block, change the variable drop-down to `greenAmount`. Then, change the acceleration drop-down from `x` to `y`. 
Duplicate it one more time for `blueAmount` and change the acceleration to `z`.

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
    redAmount = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 255)
    greenAmount = Math.map(input.acceleration(Dimension.Y), -1024, 1024, 0, 255)
    blueAmount = Math.map(input.acceleration(Dimension.Z), -1024, 1024, 0, 255)
})
```

## Step 6: Mix the Lights!
Now our variables are loaded with live gravity data. Let's use them to turn on the lights!
Open the **LIGHT** drawer and grab the `||light:set all pixels to red||` block. Snap it at the bottom of your forever loop.
Open the **LIGHT** drawer again. Under the **Color** section, grab the `||light:red 255 green 255 blue 255||` block. Drop it directly over the red color oval in your `set all pixels` block.

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
    redAmount = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 255)
    greenAmount = Math.map(input.acceleration(Dimension.Y), -1024, 1024, 0, 255)
    blueAmount = Math.map(input.acceleration(Dimension.Z), -1024, 1024, 0, 255)
    light.setAll(light.rgb(255, 255, 255))
})
```

## Step 7: Plug in the Variables
Almost done! Go to the **VARIABLES** drawer. Grab the round `||variables:redAmount||` block and drop it into the `255` next to red. Grab `||variables:greenAmount||` and drop it next to green. Finally, grab `||variables:blueAmount||` and drop it next to blue. 

```blocks
let redAmount = 0
let greenAmount = 0
let blueAmount = 0
forever(function () {
    redAmount = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 255)
    greenAmount = Math.map(input.acceleration(Dimension.Y), -1024, 1024, 0, 255)
    blueAmount = Math.map(input.acceleration(Dimension.Z), -1024, 1024, 0, 255)
    light.setAll(light.rgb(redAmount, greenAmount, blueAmount))
})
```

## Step 8: Test it!
Look at the simulator on the screen. As you move your mouse over the board to tilt it, the lights should smoothly change colors! Download it to your real gadget and see what happens when you flip it upside down!
