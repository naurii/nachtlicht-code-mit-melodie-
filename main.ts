let EINAUS = -1
basic.forever(function () {
    if (EINAUS == -1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.turnRgbLedOff()
    }
})
basic.forever(function () {
    if (EINAUS == 1) {
        if (input.lightLevel() <= 80 || input.lightLevel() >= 41) {
            basic.setLedColor(0xffff00)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
        if (input.lightLevel() <= 40) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.setLedColor(0xff0000)
        }
        if (input.lightLevel() >= 81) {
            basic.turnRgbLedOff()
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        EINAUS = EINAUS * -1
        basic.pause(1000)
    }
})
