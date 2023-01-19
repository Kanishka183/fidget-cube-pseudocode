input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.QuarterNote)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Rabbit)
})
basic.showNumber(404)
basic.showLeds(`
    . # . . #
    . # . # .
    . # # . .
    . # . # .
    . # . . #
    `)
