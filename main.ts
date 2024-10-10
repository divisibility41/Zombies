let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
game.onUpdate(function () {
    controller.moveSprite(mySprite)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
forever(function () {
    pause(0)
})
