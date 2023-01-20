input.onButtonPressed(Button.A, function () {
    basic.showString(" hi")
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . # . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("ok")
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # . # # #
        # . # # #
        `)
    basic.showLeds(`
        # # # . #
        # # # . #
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.QuarterNote)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Rabbit)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(360)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
})
basic.showNumber(404)
basic.showLeds(`
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # . # . #
    # # # # #
    `)
