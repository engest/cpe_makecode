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

* `pattern` will hold the computer's secret list of colors.
* `player_input` will hold the list of colors YOU tap.

## Step 2: Make the Blip Function
Every time a color shows up, we want to light up two LEDs and play a beep. We will do this a LOT, so let's put it in a function!
Go to the **ADVANCED** section, open the **FUNCTIONS** drawer, and click `Make a Function`. Click **Number** to add a number parameter and rename it to `index`. Name your function `displayBlip` and click Done.

```blocks
function displayBlip (index: number) {
	
}
```

## Step 3: Add the Color Choices
Our function needs to decide which color to show based on the `index` number.
Open the **LOGIC** drawer, grab an `||logic:if true then / else||` block, and snap it inside your function. Click the **(+)** plus icon at the bottom of the block until you have `if`, three `else if` sections, and an `else`. Then click the **(-)** minus icon next to the `else` to remove it.
Grab a `||logic:0 = 0||` block for each `if` and `else if`. Drag the `||variables:index||` parameter from your function block into the first `0`, and set the second number to `0`, `1`, `2`, and `3`.

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
For each color, use two `||light:set pixel color at 0 to red||` blocks from the **LIGHT** drawer and one `||music:play tone High C for 1 beat||` block from the **MUSIC** drawer. Click the note and type in the number from the chart below.
Finally, put a `||light:clear||` block at the *very bottom* of the function (outside of the `if` block) so the lights turn off after each blip.

| Index | Pixels | Color | Tone |
| :--- | :--- | :--- | :--- |
| **0** | 0 and 1 | Yellow | 988 |
| **1** | 3 and 4 | Red | 784 |
| **2** | 6 and 7 | Green | 660 |
| **3** | 8 and 9 | Blue | 524 |

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
Now let's have the computer invent a secret pattern! Make a new function called `generatePattern`.
Inside it, add a `||variables:set pattern_length to 0||` block and drop a `||math:pick random 0 to 10||` block over the `0`. Change it to pick from `4` to `6`. 
Open the **CONSOLE** drawer (under **ADVANCED**) and add a `||console:console log value||` block. Name it `"pattern length"` and drop the `||variables:pattern_length||` variable into it. (This lets us peek at the answer in the console!)
Last, add a `||variables:set pattern to||` block and drop an `||arrays:empty array||` block from the **ARRAYS** drawer into it. This erases any old pattern.

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
Open the **LOOPS** drawer, grab a `||loops:repeat 4 times||` block, and snap it at the bottom of `generatePattern`. Drag the `||variables:pattern_length||` variable over the `4`.
Inside the loop, `||variables:set index_value||` to a `||math:pick random 0 to 3||`, log it with `||console:console log value||` named `"pattern item"`, and then use the `||arrays:add value to end||` block from the **ARRAYS** drawer to add `||variables:index_value||` to the end of `||variables:pattern||`.

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
Open the **LOOPS** drawer and grab the `||loops:for element value of list||` block. Change the variable to `item` and the list to `||variables:pattern||`. 
Go to the **FUNCTIONS** drawer, grab a `||functions:call displayBlip||` block, put it inside the loop, and drop the `||variables:item||` variable into it.
After the loop, open the **CONTROL** drawer (under **ADVANCED**) and add a `||control:wait 100000 μs||` block for a short pause.

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
First, `||variables:set player_input||` to an `||arrays:empty array||`.
Then open the **LOOPS** drawer and grab a `||loops:while true||` block. We want to keep listening until the player has tapped as many colors as the pattern. Drop a `||logic:0 ≠ 0||` block over `true` (use the drop-down on a `0 = 0` block to pick `≠`). Put the `||arrays:length of array||` block with `||variables:player_input||` on the left side and `||variables:pattern_length||` on the right side.

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
For each one, use a `||input:touch A1 is pressed||` block from the **INPUT** drawer, then `||arrays:add value to end||` of `||variables:player_input||` and `||functions:call displayBlip||` with the matching number. Use the chart from the introduction:

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
Inside the loop, add an `||logic:if true then / else||` block. Compare two `||arrays:get value at||` blocks from the **ARRAYS** drawer: `||variables:player_input||` at `||variables:index||` **=** `||variables:pattern||` at `||variables:index||`. 
If they match, set `result` to `result + 0` (no mistake). Else, set `result` to `result + 1` (one more mistake!).

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
Under the loop, add another `||logic:if true then / else||` block that checks if `||variables:result||` **=** `0`.
* **If you win:** Grab a `||control:run in parallel||` block from the **CONTROL** drawer. Inside it, play the **ba ding** sound and show the **rainbow** animation for **500 ms**. After it, add a `||control:wait 3000000 μs||` block.
* **Else (you lose):** Use another `||control:run in parallel||` block with the **wawawawaa** sound and a red `||light:show ring||`. Add a `||control:wait 3000000 μs||` block after it.

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
