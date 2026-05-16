# Magic Wand

## Introduction @unplugged
Time to add a little magic to the workshop! Your gadget has a sensor inside called an accelerometer that can feel when it is moving, tilting, or falling. We are going to program it so that when you give it a good shake, it casts a colorful, twinkling spell!

## Step 1: Add a Shake Event
We want our code to run when we move the gadget. Go to the **INPUT** drawer and grab the `||input:on shake||` block. Any code we put in here will run when the accelerometer feels a sudden movement.

## Step 2: Cast a Sound Spell
Let's make a magical sound. Go to the **MUSIC** drawer, find the `||music:play sound power up until done||` block, and snap it inside your shake block. Click the drop-down to change the sound from "power up" to **"twinkle"**. 

*Tip: Click the '+' icon on the block and change "until done" to **"in background"**. This allows the lights and sound to happen at the exact same time!*

## Step 3: Add Magic Lights
Go to the **LIGHT** drawer and grab the `||light:show animation for 500 ms||` block. Snap it under your music block. 

## Step 4: Customize the Spell
Click the animation drop-down and choose the **rainbow** animation. Then, click the time drop-down and change 500 ms to **2 seconds** (2000 ms) so the magic lasts a little longer.

## Step 5: Clean Up
Just like our other projects, we want the gadget to reset when it's done. Go to the **LIGHT** drawer, grab a `||light:clear||` block, and place it at the very bottom.

## Step 6: Test your Wand!
Press the white "SHAKE" button on the simulator to see if your spell works. If it does, download it to your gadget, hold it tightly, and give it a shake!
