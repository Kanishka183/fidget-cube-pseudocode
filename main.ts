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
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . . # # .
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Rabbit)
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
    basic.showLeds(`
        # . # . #
        # . # # #
        # # # # .
        # # # # .
        # . # # #
        `)
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
    # # # # #
    # . # . #
    # # # # #
    # . # . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
