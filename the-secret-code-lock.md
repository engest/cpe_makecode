# The Secret Code Lock

## Introduction @unplugged
In the real world, programmers hate writing the same code twice. To save time, they create **Functions**—custom blocks of code that they can use over and over again. Today, we will create a Function that acts like a security guard to check if you have entered the correct secret password!

## Step 1: Create a Password Variable
We need a place to store the password while we enter it. 
Go to the **VARIABLES** drawer, click `Make a Variable`, and name it `clicks`. 

## Step 2: Make a Function
Go to the **ADVANCED** section, open the **FUNCTIONS** drawer, and click `Make a Function`. Name your function `checkCode` and click Done. You will see a new, large `||functions:function checkCode||` block appear in your workspace.

```blocks
function checkCode () {
	
}
```

## Step 3: Add the Security Logic
Let's say our secret password is exactly 4 clicks. 
Grab an `||logic:if true then / else||` block from the **LOGIC** drawer and snap it inside your function. 
Just like our Fortune Teller, grab a `||logic:0 = 0||` block and place it over `true`. Drag your `||variables:clicks||` variable into the first `0`, and change the second `0` to `4`.

```blocks
let clicks = 0
function checkCode () {
    if (clicks == 4) {
    	
    } else {
    	
    }
}
```

## Step 4: Unlock or Lock!
If the clicks equal 4, you win! Put a green `||light:show ring||` block and a happy sound in the top section. 
If it is wrong, you fail! Put a red `||light:show ring||` block and an alarm sound in the `else` section.
Finally, put a `||variables:set clicks to 0||` block at the *very bottom* of your function to reset the password attempt. 

```blocks
let clicks = 0
function checkCode () {
    if (clicks == 4) {
        light.showRing(
        "green green green green green green green green green green"
        )
        music.powerUp.play()
    } else {
        light.showRing(
        "red red red red red red red red red red"
        )
        music.pewPew.play()
    }
    clicks = 0
}
```

## Step 5: Program Button A (The Keypad)
Now we need a way to enter the password! 
Drag an `||input:on button A click||` block into your workspace. Inside it, add a `||variables:change clicks by 1||` block. 
Let's add a `||light:show animation||` block and set it to **sparkle** for **500 ms** so we know the button was pressed.

```blocks
let clicks = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    clicks += 1
    light.showAnimation(light.sparkleAnimation, 500)
})
```

## Step 6: Program Button B (The Enter Key)
When we are ready to check the password, we will press Button B. 
Drag another `||input:on button A click||` block into your workspace, and change the drop-down to `||button B||`.
Go to the **FUNCTIONS** drawer and grab the `||functions:call checkCode||` block. Snap it inside your Button B block. 

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function () {
    checkCode()
})
```

## Step 7: Test the Lock!
In the simulator, click Button A exactly four times. Then click Button B. You should get the green light! Try it again with a wrong number to see the red light. Download it and challenge a friend to guess your code!
