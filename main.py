EINAUS = -1

def on_forever():
    if EINAUS == -1:
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.turn_rgb_led_off()
basic.forever(on_forever)

def on_forever2():
    if EINAUS == 1:
        if input.light_level() <= 80 or input.light_level() >= 41:
            basic.set_led_color(0xffff00)
            pins.digital_write_pin(DigitalPin.P1, 0)
            pins.digital_write_pin(DigitalPin.P2, 1)
        if input.light_level() <= 40:
            pins.digital_write_pin(DigitalPin.P1, 1)
            pins.digital_write_pin(DigitalPin.P2, 0)
            basic.set_led_color(0xff0000)
        if input.light_level() >= 81:
            basic.turn_rgb_led_off()
            pins.digital_write_pin(DigitalPin.P1, 0)
            pins.digital_write_pin(DigitalPin.P2, 0)
basic.forever(on_forever2)

def on_forever3():
    global EINAUS
    if input.button_is_pressed(Button.A):
        EINAUS = EINAUS * -1
        basic.pause(1000)
basic.forever(on_forever3)
