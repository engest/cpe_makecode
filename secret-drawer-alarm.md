# Secret Drawer Alarm

## Introduction @unplugged
Welcome to the Secret Drawer Alarm! Have you ever wanted to keep siblings out of your stuff? In this project, we are going to program our gadget to act as a security system. We will use the built-in light sensor so that when someone opens your drawer, the light pouring in will trigger a flashing red-and-blue siren!

## Step 1: Find the Light Event
First, we need our gadget to wait for the light to change. Go to the **INPUT** drawer and pull out the `||input:on light dark||` block and drag it into your workspace. Change the detection from `||dark||` to `||bright||`. This block will run whatever code we put inside it the moment the sensor detects light.

## Step 2: Add a Loop
When the alarm goes off, we want it to flash and beep a few times, not just once. Go to the **LOOPS** drawer and drag a `||loops:repeat 4 times||` block into your `||input:on light bright||` block. Change the number 4 to 5.

## Step 3: Flash Red
Let's add the first part of our siren. Go to the **LIGHT** drawer and drag `||light:set all pixels to red||` inside your loop. 

## Step 4: Make some Noise!
Now for the sound. Go to the **MUSIC** drawer and grab `||music:play tone Middle C for 1/2 beat||`. Snap it right under the red light block. Change the tone to High A.

## Step 5: Flash Blue
To make it a true siren, let's switch the color. Go to the **LIGHT** drawer again, grab another `||light:set all pixels to red||` block, put it under your music block, and click the color drop-down to change it to **blue**.

## Step 6: Complete the Siren
Go to the **MUSIC** drawer one more time. Grab `||music:play tone Middle C for 1/2 beat||` and snap it at the bottom of your loop. Change the tone to High E.

## Step 7: Turn it Off
When the alarm finishes repeating 5 times, it should turn the lights off so it can hide in the dark again. Go to the **LIGHT** drawer, grab a `||light:clear||` block, and snap it at the very bottom of your `||input:on light bright||` block, *outside* the loop, or *under* the loop.

## Step 8: Test it!
Test your code in the simulator by moving the sun icon up to make it bright. If it flashes and beeps, download it to your gadget and hide it in a drawer!
