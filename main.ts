for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.StickFigure)
}
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Sad)
}
basic.pause(100)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.House)
}
basic.showString("POR QUE ESTAS TRISTE")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.StickFigure)
}
basic.showString("ES QUE SOI PODRE")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.House)
}
basic.showString("TE CONSEDERE UN DESEO")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.StickFigure)
    basic.showString("NOTE CREO AVER DESEO QUE TODO LO QUE TOQUE SE CONVIERTA EN ORO")
    basic.showIcon(IconNames.House)
}
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.House)
    basic.showLeds(`
        . . . . .
        . # . # #
        # # # . #
        . # . . #
        # . # . #
        `)
    basic.showIcon(IconNames.Surprised)
}
basic.forever(function () {
	
})
