# Digital Fortune Teller

## Introduction @unplugged
Welcome back to the workshop! Have you ever used a Magic 8-Ball? Today, we are going to build our own digital Fortune Teller! To do this, we need to learn about **Variables** (a way for the computer to remember a number) and **Logic** (how a computer makes decisions). 

## Step 1: Create a Variable
A variable is like a digital box where we can store information. 
Go to the **VARIABLES** drawer and click `Make a Variable`. Name your variable `fortune` and click OK. 

## Step 2: The Shake Trigger
We want our Fortune Teller to work when we shake it. 
Open the **INPUT** drawer, grab the `||input:on shake||` block, and drag it into your workspace.

```blocks
input.onGesture(Gesture.Shake, function () {
	
})
```

## Step 3: Pick a Random Number
Let's tell our variable to hold a random number.
Open the **VARIABLES** drawer, grab the `||variables:set fortune to 0||` block, and snap it inside your `||input:on shake||` block. 
Then, open the **MATH** drawer, grab the `||math:pick random 0 to 10||` block, and drop it over the `0` in your set block. Change the `0` to `1` and the `10` to `3`.

```blocks
let fortune = 0
input.onGesture(Gesture.Shake, function () {
    fortune = randint(1, 3)
})
```

## Step 4: Add the Logic (If / Else)
Now we need our gadget to make a decision based on the number!
Open the **LOGIC** drawer, grab the `||logic:if true then / else||` block, and snap it directly under your variable block. 
Click the **(+)** plus icon at the bottom of the block *once* to add an `else if` section.

```blocks
let fortune = 0
input.onGesture(Gesture.Shake, function () {
    fortune = randint(1, 3)
    if (true) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Step 5: Check the Number
Open the **LOGIC** drawer again. Grab the `||logic:0 = 0||` comparison block and drop it into the `true` space next to the first `if`.
Go to the **VARIABLES** drawer, grab the round `||variables:fortune||` block, and drop it into the first `0`. Change the second `0` to `1`. 
*Repeat this exactly for the `else if` space, but change the number to `2`.*

```blocks
let fortune = 0
input.onGesture(Gesture.Shake, function () {
    fortune = randint(1, 3)
    if (fortune == 1) {
    	
    } else if (fortune == 2) {
    	
    } else {
    	
    }
})
```

## Step 6: Program the Fortunes!
Now, fill in what happens for each number! 
* **If it equals 1 (Good Fortune):** Add a green light ring and a happy sound.
* **Else If it equals 2 (Bad Fortune):** Add a red light ring and a sad sound.
* **Else (Mystery Fortune):** Add a yellow light ring and a magical sound. (The computer knows that if it isn't 1 or 2, it *must* be 3!)

```blocks
let fortune = 0
input.onGesture(Gesture.Shake, function () {
    fortune = randint(1, 3)
    if (fortune == 1) {
        light.showRing(
        "green green green green green green green green green green"
        )
        music.baDing.play()
    } else if (fortune == 2) {
        light.showRing(
        "red red red red red red red red red red"
        )
        music.wawawawaa.play()
    } else {
        light.showRing(
        "yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow"
        )
        music.magicWand.play()
    }
})
```
## Step 7: Test it!
Shake the virtual simulator a few times. You should get different colors and sounds randomly! If it works, download it to your gadget and predict the future!
