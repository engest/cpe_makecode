# The Human Piano

## Introduction @unplugged
Let's make some music! The gold pads around the edge of your gadget can sense electricity in your body. We are going to program all **seven** of the touch pads to act like piano keys. By touching the different pins, you'll complete a circuit to play a full musical scale and trigger a rainbow of lights.

## Step 1: Program the First Key (A1)
Go to the **INPUT** drawer and grab the `||input:on button A clicked||` block. Change "button A" to "touch A1". Change "click" to "down". This acts just like a button, but it triggers when you touch the metal pad labeled A1.

## Step 2: Add a Color
Let's make our piano light up when played! Go to the **LIGHT** drawer and drag `||light:set all pixels to red||` into your `||input:on touch A1 down||` block.

## Step 3: Play a Note
Go to the **MUSIC** drawer and grab `||music:play tone Middle C for 1/2 beat||`. Snap it right under the light block. 

## Step 4: Clear the Lights
We want the light to turn off when the note finishes playing. Go to the **LIGHT** drawer, grab `||light:clear||`, and place it at the very bottom of your `||input:on touch A1 down||` block. 

## Step 5: Duplicate and Build the Pattern!
Now that you have built the code for one key, you can see the pattern! You need to make this exact same block of code for pins **A2, A3, A4, A5, A6, and A7**. 

*Pro-Tip: You don't have to drag every block from the menu again! Just right-click on your `||input:on pin A1 pressed||` block and select **Duplicate** to make a copy.*

## Step 6: The Piano Chart
Use this chart to change the Pin, Color, and Note for all 7 of your blocks so you have a complete piano!

| Pin | Light Color | Music Note |
| :--- | :--- | :--- |
| **A1** | Red | Middle C |
| **A2** | Orange | Middle D |
| **A3** | Yellow | Middle E |
| **A4** | Green | Middle F |
| **A5** | Blue | Middle G |
| **A6** | Purple | Middle A |
| **A7** | Pink | Middle B |

## Step 7: Play your Piano!
Look over your workspace and make sure you have 7 separate blocks of code. Download the code to your gadget. To play it, you must hold the **GND** (Ground) pin with one hand, and tap the A1 through A7 pins with your other hand to complete the circuit!
