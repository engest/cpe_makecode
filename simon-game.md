# Simon Game

## Introduction @unplugged
Have you ever played the memory game **Simon**? The game flashes a pattern of colored lights and sounds, and you have to repeat the pattern back without making a mistake!

Today we are going to build our own Simon Game. To do this, we will learn about **Arrays** (a list of numbers the computer can remember), **Functions** (named chunks of code we can reuse), and **Loops** (repeating code over and over). 

Our game has four colors. Each color has a touch pad you tap to answer:

| Number | Color | Touch Pad |
| :--- | :--- | :--- |
| **0** | Yellow | A4 |
| **1** | Red | A7 |
| **2** | Green | A1 |
| **3** | Blue | A3 |

## Step 1: Create the Variables
Our game needs to remember a lot of information!
Go to the **VARIABLES** drawer and click `Make a Variable` to create each of these variables: `pattern_length`, `pattern`, `index_value`, `player_input`, and `result`.

* `pattern_length` will hold the length of the generated pattern.
* `pattern` will hold the computer's secret list of colors.
* `index_value` is the index of a particular "side" of the board.
* `player_input` will hold the list of colors YOU tap.
* `result` will be the pattern that the user performs.

## Step 2: Make the Blip Function
Every time a color shows up, we want to light up two LEDs and play a beep. We will do this a LOT, so let's put it in a function!
Go to the **ADVANCED** section, open the **FUNCTIONS** drawer, and click `Make a Function`. Click **Number** to add a number parameter and rename it to `index` by changing `num` to `index`. Name your function `displayBlip` by clicking on the text `doSomething` and type in `generatePattern` and click Done.

```blocks
function displayBlip (index: number) {
	
}
```

## Step 3: Add the Color Choices
Our function needs to decide which color to show based on the `index` number.
Open the **LOGIC** drawer, grab an `||logic:if true then / else||` block, and snap it inside your function. Click the **(+)** plus icon at the bottom of the block until you have `if`, three `else if` sections, and an `else`. Then click the **(-)** minus icon next to the `else` to remove it.
From the **LOGIC** drawer, grab a `||logic:0 = 0||` block for each `if` and `else if`. Drag the `||variables:index||` parameter from your function block into the first `0`, and set the second number to `0`, `1`, `2`, and `3`.

```blocks
function displayBlip (index: number) {
    if (index == 0) {
    	
    } else if (index == 1) {
    	
    } else if (index == 2) {
    	
    } else if (index == 3) {
    	
    }
}
```

## Step 4: Light it Up and Beep!
For each color, use two `||light:set pixel color at 0 to red||` blocks from the **LIGHT** drawer and one `||music:play tone at Middle C for 1/2 beat||` block from the **MUSIC** drawer. Click the note and type in the number from the chart below. Make sure to set each one to 1 beat.
Finally, put a `||light:clear||` from the **LIGHT** `||light:**LIGHT**||` drawer block at the *very bottom* of the function (outside of the `if` block) so the lights turn off after each blip.

| Index | Pixels | Color | Tone |
| :--- | :--- | :--- | :--- |
| **0** | 0 and 1 | Yellow | High B (988) |
| **1** | 3 and 4 | Red | High G (784) |
| **2** | 6 and 7 | Green | High E (660) |
| **3** | 8 and 9 | Blue | High C (524) |

```blocks
function displayBlip (index: number) {
    if (index == 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xffff00)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (index == 1) {
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0xff0000)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (index == 2) {
        light.setPixelColor(6, 0x00ff00)
        light.setPixelColor(7, 0x00ff00)
        music.playTone(660, music.beat(BeatFraction.Whole))
    } else if (index == 3) {
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0x0000ff)
        music.playTone(524, music.beat(BeatFraction.Whole))
    }
    light.clear()
}
```

## Step 5: Make the Pattern Function
Now let's have the computer invent a secret pattern! Go to the **ADVANCED** section, open the **FUNCTIONS** drawer, and click `Make a Function` and called it `generatePattern` by clicking the text `doSomething` and typing  `generatePattern` in its place.
Inside it, add a `||variables:set pattern_length to 0||` block from the **VARIABLES** drawer, and drop a `||math:pick random 0 to 10||` block from the **MATH** drawer over the `0`. Change the `0` to `10` to `4` to `6`. This will make it pick a random value of 4, 5, or 6 and assign it to the `||variables:pattern_length||` variable, which will be used to determine how long our pattern sequence is. 
Open the **>_ CONSOLE** drawer (under **ADVANCED**) and add a `||console:console log value||` block. Name it `"pattern length"` and from the **VARIABLES** drawer drop the `||variables:pattern_length||` variable over the `0`. (This lets us peek at the answer in the console!)
Last, add a `||variables:set pattern to 0||` block from the **VARIABLES** drawer and drop an `||arrays:empty array||` block from the **ARRAYS** drawer into it over the `0`. This sets pattern to be a list and erases any old pattern on repeat runs.

```blocks
let pattern: number[] = []
let pattern_length = 0
function generatePattern () {
    pattern_length = Math.randomRange(4, 6)
    console.logValue("pattern length", pattern_length)
    pattern = []
}
```

## Step 6: Fill the Pattern
Now we fill our list with random colors.
Open the **LOOPS** drawer, grab a `||loops:repeat 4 times||` block, and snap it at the bottom of `generatePattern` function. Drag the `||variables:pattern_length||` variable over the `4`.
Inside the loop, place a `||variables:set index_value to 0||` from the **VARIABLES** drawer and then from the **MATH** drawer drop a `||math:pick random 0 to 10||` over the `0` and change it the `10` to a `3`. Now let's log the random index item that will go into the pattern by opening the **>_ CONSOLE** and adding `||console:console log value||` after the `||variables:set index_value to pick random 0 to 10||`. In the quotes give it the label `"pattern item"` and for the value, go to the **VARIABLES** drawer and drag index_value over the `0`. Now to add the random index_value to our pattern, use the `||arrays:list add value to end||` block from the **ARRAYS** drawer to add `||variables:index_value||` to the end of `||variables:pattern||` (select `||variables:pattern||` from the pull-down list.)

```blocks
let index_value = 0
let pattern: number[] = []
let pattern_length = 0
function generatePattern () {
    pattern_length = Math.randomRange(4, 6)
    console.logValue("pattern length", pattern_length)
    pattern = []
    for (let i = 0; i < pattern_length; i++) {
        index_value = Math.randomRange(0, 3)
        console.logValue("pattern item", index_value)
        pattern.push(index_value)
    }
}
```

## Step 7: Show the Pattern
Make a new function called `showPattern`.
Open the **LOOPS** drawer and grab the `||loops:for element value of list||` block and drop it in the `showPattern` function. We are going to let it keep the default element variable named `value`. But change the list of the for loop to `||variables:pattern||` by pulling down the list and selecting `pattern`. Alternatively, you can drag `||variables:pattern||` from the **VARIABLES** drawer and drop in on `list`. 
Now go to the **FUNCTIONS** drawer, grab a `||functions:call displayBlip||` block, put it inside the loop, and drag the `||variables:value||` from the for loop and drop the it over the `1` of the `||functions:call displayBlip||` function.
After the loop, at the bottom of the `showPattern` function, open the **CONTROL** drawer (under **ADVANCED**) and add a `||control:wait 4 μs||`, changing the `4` to `100000` block for a short pause.

```blocks
let pattern: number[] = []
function showPattern () {
    for (let item of pattern) {
        displayBlip(item)
    }
    control.waitMicros(100000)
}
function displayBlip (index: number) {
    if (index == 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xffff00)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (index == 1) {
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0xff0000)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (index == 2) {
        light.setPixelColor(6, 0x00ff00)
        light.setPixelColor(7, 0x00ff00)
        music.playTone(660, music.beat(BeatFraction.Whole))
    } else if (index == 3) {
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0x0000ff)
        music.playTone(524, music.beat(BeatFraction.Whole))
    }
    light.clear()
}
```

## Step 8: Wait for the Player
Now it's the player's turn! Make a new function called `getPlayerInput`.
First, drag `||variables:set player_input to 0||` from the **VARIABLES** drawer into the `getPlayerInput` function and from the **ARRAYS** drawer drag a `||arrays:empty array||` over the `0`.
Then open the **LOOPS** drawer and grab a `||loops:while true do||` block. We want to keep listening until the player has tapped as many colors as the pattern. Inside the loop, from the **LOGIC** drawer, drop a `||logic:0 ≠ 0||` block over `true` of the while loop (use the drop-down on a `0 = 0` block to pick `≠`, not equals). From the **ARRAYS** drawer put the `||arrays:length of array||` block with `||variables:player_input||` on the left side of the `||logic:0 ≠ 0||` block, and put `||variables:pattern_length||` on the right side.

```blocks
let player_input: number[] = []
let pattern_length = 0
function getPlayerInput () {
    player_input = []
    while (player_input.length != pattern_length) {
    	
    }
}
```

## Step 9: Read the Touch Pads
Inside the `while` loop, add an `||logic:if true then / else||` block with three `else if` sections and no `else`. 
For each one, place a `||input:button A is pressed||` block from the **INPUT** drawer over the empty hexagon, change `button A` to `touch A4`, `touch A7`, `touch A1`, and `touch A3`. Then open the **ARRAYS** drawer and drag the `||arrays:list add value to end||` inside the if else sections and set the list to `||variables:player_input||` for each one. To set the value for each one, open the **MATH** drawer and drag the `||math:0||` item into the empty oval of the `||arrays:list add value to end||` block, setting the values 0, 1, 3, and 3. Next, from the **FUNCTIONS** drawer drop `||functions:call displayBlip||` under the `||arrays:player_input add value to end||` of each `if/else-if` section, setting the `1` with the matching number as we put in the block above it. Check the Hint to see the way this should look. Click the (-) for the else part of the if/else block to remove the else section if it is still there. Use the chart from the introduction to know what touch pads to use for the indexes:

| Touch Pad | Number |
| :--- | :--- |
| **A4** | 0 |
| **A7** | 1 |
| **A1** | 2 |
| **A3** | 3 |

```blocks
let player_input: number[] = []
let pattern_length = 0
function getPlayerInput () {
    player_input = []
    while (player_input.length != pattern_length) {
        if (input.touchA4.isPressed()) {
            player_input.push(0)
            displayBlip(0)
        } else if (input.touchA7.isPressed()) {
            player_input.push(1)
            displayBlip(1)
        } else if (input.touchA1.isPressed()) {
            player_input.push(2)
            displayBlip(2)
        } else if (input.touchA3.isPressed()) {
            player_input.push(3)
            displayBlip(3)
        }
    }
}
function displayBlip (index: number) {
    if (index == 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xffff00)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (index == 1) {
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0xff0000)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (index == 2) {
        light.setPixelColor(6, 0x00ff00)
        light.setPixelColor(7, 0x00ff00)
        music.playTone(660, music.beat(BeatFraction.Whole))
    } else if (index == 3) {
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0x0000ff)
        music.playTone(524, music.beat(BeatFraction.Whole))
    }
    light.clear()
}
```

## Step 10: Check the Answer
Make a new function called `checkResult`. We will count the mistakes in the `result` variable.
Start with `||variables:set result to 0||`. Then grab a `||loops:for index from 0 to 4||` block from the **LOOPS** drawer and drag `||variables:pattern_length||` over the `4`.
Inside the loop, add an `||logic:if true then / else||` block. Replace the `true` with a `||logic:0 = 0||`  and replace the `0`s to compare two `||arrays:list get value at||` blocks from the **ARRAYS** drawer where the first list is replaced with `||variables:player_input||`. Drag the `||variables:index||` from the for loop and drop it over the `0` of both `||arrays:list get value at||` blocks. Likewise the other side of the **=** the `||arrays:list get value at||` should use the list `||variables:pattern||`. Make sure to compare with the hint diagram.
If it is `TRUE` that they match (within the `if` area, using `||variables:set result to 0||` from the **VARIABLES** drawer set `result` to `result + 0` (which means no mistake). In order to put `result + 0` on the right side, we need to go to the **MATH** drawer and drag the `0 + 0` block and drop it on the `0`. Then we need to go to the **VARIABLES** drawer and drop `||variables:result||` over the first `0` and leave the second `0` as `0`. In the `else` area, in the same way set `result` to `result + 1` (as in one more mistake!).

```blocks
let pattern: number[] = []
let player_input: number[] = []
let pattern_length = 0
let result = 0
function checkResult () {
    result = 0
    for (let index = 0; index <= pattern_length; index++) {
        if (player_input[index] == pattern[index]) {
            result = result + 0
        } else {
            result = result + 1
        }
    }
}
```

## Step 11: Win or Lose!
Still within the `||functions:checkResult||` function, under the loop, add another `||logic:if true then / else||` block that checks if `||variables:result||` **=** `0`. Remember, we need to go to the **LOGIC** drawer and drop in a `||logic:0 = 0||` block over the `true` after the `if`, and then inside that we need to drop the `||variables:result||` variable on the left `0` and leave the right side as `0`. This means no errors! A win! But if this is not true, if `||variables:result||` is more than `0` (the `else`) then that is a loss.
* **If you win:** Within the `if` area, drop a `||control:run in parallel||` block from the **CONTROL** drawer. Inside it, from the **MUSIC** dawer drop a `||music:play sound ba ding||` to play the **ba ding** sound and right after that, from the **LIGHT** drawer drop in `||light:show animation for 500 ms||` to show the **rainbow** animation for **500 ms**. After the `||control:run in parallel||`, add a `||control:wait 3000000 μs||` block.
* **Else (you lose):** Within the `else` area, use another `||control:run in parallel||` block likewie, within it place a red `||light:show ring||` and the **wawawawaa** sound. After the `||control:run in parallel||`, add a `||control:wait 3000000 μs||` block.

Finally, at the very bottom of the function, add a `||light:clear||` block and a `||control:wait 2000000 μs||` block so the player can get ready for the next round.

```blocks
let pattern: number[] = []
let player_input: number[] = []
let pattern_length = 0
let result = 0
function checkResult () {
    result = 0
    for (let index = 0; index <= pattern_length; index++) {
        if (player_input[index] == pattern[index]) {
            result = result + 0
        } else {
            result = result + 1
        }
    }
    if (result == 0) {
        control.runInParallel(function () {
            music.baDing.play()
            light.showAnimation(light.rainbowAnimation, 500)
        })
        control.waitMicros(3000000)
    } else {
        control.runInParallel(function () {
            music.wawawawaa.play()
            light.showRing(
            "red red red red red red red red red red"
            )
        })
        control.waitMicros(3000000)
    }
    light.clear()
    control.waitMicros(2000000)
}
```

## Step 12: Run the Game Forever
All of our functions are ready! Now we just need to call them in the right order.
Open the **LOOPS** drawer and drag a `||loops:forever||` block into your workspace. From the **FUNCTIONS** drawer, snap in these calls in order: `||functions:call generatePattern||`, `||functions:call showPattern||`, `||functions:call getPlayerInput||`, and `||functions:call checkResult||`.

```blocks
let pattern_length = 0
let pattern: number[] = []
let index_value = 0
let player_input: number[] = []
let result = 0
function generatePattern () {
    pattern_length = Math.randomRange(4, 6)
    console.logValue("pattern length", pattern_length)
    pattern = []
    for (let i = 0; i < pattern_length; i++) {
        index_value = Math.randomRange(0, 3)
        console.logValue("pattern item", index_value)
        pattern.push(index_value)
    }
}
function getPlayerInput () {
    player_input = []
    while (player_input.length != pattern_length) {
        if (input.touchA4.isPressed()) {
            player_input.push(0)
            displayBlip(0)
        } else if (input.touchA7.isPressed()) {
            player_input.push(1)
            displayBlip(1)
        } else if (input.touchA1.isPressed()) {
            player_input.push(2)
            displayBlip(2)
        } else if (input.touchA3.isPressed()) {
            player_input.push(3)
            displayBlip(3)
        }
    }
}
function showPattern () {
    for (let item of pattern) {
        displayBlip(item)
    }
    control.waitMicros(100000)
}
function displayBlip (index: number) {
    if (index == 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xffff00)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else if (index == 1) {
        light.setPixelColor(3, 0xff0000)
        light.setPixelColor(4, 0xff0000)
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if (index == 2) {
        light.setPixelColor(6, 0x00ff00)
        light.setPixelColor(7, 0x00ff00)
        music.playTone(660, music.beat(BeatFraction.Whole))
    } else if (index == 3) {
        light.setPixelColor(8, 0x0000ff)
        light.setPixelColor(9, 0x0000ff)
        music.playTone(524, music.beat(BeatFraction.Whole))
    }
    light.clear()
}
function checkResult () {
    result = 0
    for (let index = 0; index <= pattern_length; index++) {
        if (player_input[index] == pattern[index]) {
            result = result + 0
        } else {
            result = result + 1
        }
    }
    if (result == 0) {
        control.runInParallel(function () {
            music.baDing.play()
            light.showAnimation(light.rainbowAnimation, 500)
        })
        control.waitMicros(3000000)
    } else {
        control.runInParallel(function () {
            music.wawawawaa.play()
            light.showRing(
            "red red red red red red red red red red"
            )
        })
        control.waitMicros(3000000)
    }
    light.clear()
    control.waitMicros(2000000)
}
forever(function () {
    generatePattern()
    showPattern()
    getPlayerInput()
    checkResult()
})
```

## Step 13: Play Simon!
Watch the simulator flash a pattern of colors. Then click the touch pads (A4, A7, A1, A3) in the same order. Get it right and you'll see a rainbow! Get it wrong and the ring turns red. 
*Stuck? Click **Show console Simulator** under the simulator to peek at the secret pattern.* 
Download it to your gadget, hold the **GND** pin with one hand, and challenge a friend to beat your memory!
