let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
})
game.onUpdate(function () {
    controller.moveSprite(mySprite)
})
