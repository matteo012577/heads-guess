input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(0)
})
input.onGesture(Gesture.LogoUp, function () {
    index = randint(0, tekstlijst.length - 1)
    basic.showString("" + (tekstlijst[index]))
})
let index = 0
let tekstlijst: string[] = []
tekstlijst = ["puppy", "clock", "nicht"]
game.startCountdown(30000)
