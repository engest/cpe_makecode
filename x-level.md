# X-Level

## Introduction @unplugged
Welcome to class! Today we are going to turn our Circuit Playground Express into the **X-Level**, a digital leveling tool like the bubble level a carpenter uses.
The CPX has a sensor inside called an **accelerometer** that can feel which way gravity is pulling. We will read the tilt along the **X axis** (left and right) and use the LED ring to show which way the board is tipping and by how much. When the board is perfectly level, all the lights turn **green**!

## Step 1: Create an X Accel Variable
First, we need somewhere to store the tilt reading.
Go to the **VARIABLES** drawer, click `Make a Variable`, and name it `x_accel`.

## Step 2: Read the Tilt Forever
A level needs to check the tilt over and over again, so we will use the `||loops:forever||` block that is already in your workspace.
Open the **VARIABLES** drawer and drag a `||variables:set x_accel to 0||` block into the `||loops:forever||` block.
Then open the **INPUT** drawer, grab the round `||input:acceleration (mg) x||` block, and drop it into the `0`.

```blocks
let x_accel = 0
forever(function () {
    x_accel = input.acceleration(Dimension.X)
})
```

## Step 3: Make a Clear Left Function
When the board tips to one side, we want to turn off the lights on the other side. We will build two **functions** to do this for us.
Open the **Advanced** section, then the **FUNCTIONS** drawer, and click `Make a Function`. Name it `clearLeft`.
Open the **LIGHT** drawer and add five `||light:set pixel color at 0 to||` blocks inside it. Set them to pixels `0`, `1`, `2`, `3`, and `4`, and set every color to **black** (off).

```blocks
function clearLeft () {
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(1, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(3, 0x000000)
    light.setPixelColor(4, 0x000000)
}
```

## Step 4: Make a Clear Right Function
Now do the same thing for the other side of the ring.
Make another function named `clearRight`. Add five `||light:set pixel color at 0 to||` blocks for pixels `5`, `6`, `7`, `8`, and `9`, all set to **black**.

```blocks
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
```

## Step 5: Is It Level?
Time to make a decision! Open the **LOGIC** drawer and drag an `||logic:if true then else||` block under your `||variables:set x_accel||` block.
From the **LOGIC** drawer, grab a `||logic:0 < 0||` comparison block and drop it into the `true` slot. Put the `||variables:x_accel||` variable into the first `0`.
In the `||logic:else||` part, open the **LIGHT** drawer and add a `||light:set all pixels to||` block set to **green**. This is what our level shows when it is perfectly flat!

```blocks
let x_accel = 0
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < 0) {

    } else {
        light.setAll(0x00ff00)
    }
})
```

## Step 6: A Little Tilt to the Left
When `x_accel` is less than `0`, the board is tipping a little to the left.
Inside the `||logic:if||` part, add five `||light:set pixel color at||` blocks for pixels `0` to `4`. Make pixels `0` and `4` **yellow**, and pixels `1`, `2`, and `3` **black**.
Then open the **FUNCTIONS** drawer and add a `||functions:call clearRight||` block to turn off the right side.

```blocks
let x_accel = 0
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0x000000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0x000000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else {
        light.setAll(0x00ff00)
    }
})
```

## Step 7: More Tilt to the Left
Now we want to show **bigger** tilts with more lights.
Click the **⨁** on your `||logic:if||` block to add an `||logic:else if||`. We need to check the biggest tilts **first**, so drag the blocks around until the order of your checks is:
1. `||variables:x_accel||` `<` `-1000`
2. `||variables:x_accel||` `<` `-640`
3. `||variables:x_accel||` `<` `0`

For `-1000` (a big tilt), light pixels `0` and `4` **yellow**, `1` and `3` **orange**, and `2` **red**.
For `-640` (a medium tilt), light pixels `0` and `4` **yellow**, `1` and `3` **orange**, and `2` **black**.
Don't forget to add `||functions:call clearRight||` at the end of each one!

```blocks
let x_accel = 0
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < -1000) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0xff0000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < -640) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0x000000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0x000000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else {
        light.setAll(0x00ff00)
    }
})
```

## Step 8: Tilt to the Right
Now let's handle the other side! Click the **⨁** three more times to add three more `||logic:else if||` sections, placed **before** the `||logic:else||`.
This time use the `>` comparison with **positive** numbers, again checking the biggest tilt first:
1. `||variables:x_accel||` `>` `1000` — pixels `5` and `9` **yellow**, `6` and `8` **orange**, `7` **red**
2. `||variables:x_accel||` `>` `640` — pixels `5` and `9` **yellow**, `6` and `8` **orange**, `7` **black**
3. `||variables:x_accel||` `>` `0` — pixels `5` and `9` **yellow**, `6`, `7`, and `8` **black**

End each of these with a `||functions:call clearLeft||` block to turn off the left side.

```blocks
let x_accel = 0
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
function clearLeft () {
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(1, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(3, 0x000000)
    light.setPixelColor(4, 0x000000)
}
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < -1000) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0xff0000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < -640) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0x000000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0x000000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel > 1000) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0xff0000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 640) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 0) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0x000000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0x000000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else {
        light.setAll(0x00ff00)
    }
})
```

## Step 9: Watch the Numbers and Slow Down
Let's see the actual tilt numbers while we test!
Open the **CONSOLE** drawer and add a `||console:console log||` block **after** the big `||logic:if||` block. Put the `||variables:x_accel||` variable inside it.
Finally, open the **Advanced** section, then the **CONTROL** drawer, and add a `||control:wait (µs)||` block set to `40000`. This gives the CPX a tiny break (40 milliseconds) between readings.

```blocks
let x_accel = 0
function clearRight () {
    light.setPixelColor(5, 0x000000)
    light.setPixelColor(6, 0x000000)
    light.setPixelColor(7, 0x000000)
    light.setPixelColor(8, 0x000000)
    light.setPixelColor(9, 0x000000)
}
function clearLeft () {
    light.setPixelColor(0, 0x000000)
    light.setPixelColor(1, 0x000000)
    light.setPixelColor(2, 0x000000)
    light.setPixelColor(3, 0x000000)
    light.setPixelColor(4, 0x000000)
}
forever(function () {
    x_accel = input.acceleration(Dimension.X)
    if (x_accel < -1000) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0xff0000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < -640) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0xff8000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0xff8000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel < 0) {
        light.setPixelColor(0, 0xffff00)
        light.setPixelColor(1, 0x000000)
        light.setPixelColor(2, 0x000000)
        light.setPixelColor(3, 0x000000)
        light.setPixelColor(4, 0xffff00)
        clearRight()
    } else if (x_accel > 1000) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0xff0000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 640) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0xff8000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0xff8000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else if (x_accel > 0) {
        light.setPixelColor(5, 0xffff00)
        light.setPixelColor(6, 0x000000)
        light.setPixelColor(7, 0x000000)
        light.setPixelColor(8, 0x000000)
        light.setPixelColor(9, 0xffff00)
        clearLeft()
    } else {
        light.setAll(0x00ff00)
    }
    console.log(x_accel)
    control.waitMicros(40000)
})
```

## Step 10: Test Your X-Level!
Look at the virtual CPX simulator. Move your mouse over the board to tilt it left and right, and watch the lights change from yellow, to orange, to red as the tilt gets bigger. Click **Show console Simulator** to see the `x_accel` numbers.
When you are ready, download the code to your real Circuit Playground Express. Set it on a table, a shelf, or a book and see if it is level!
