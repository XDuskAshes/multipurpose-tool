function RNG150Fctn () {
    TimesUsedShow += 1
    RNGFctn = 0
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(randint(1, 50))
    pause(5000)
    NmbrCntSprt.destroy()
    game.splash("Generation Finished.", "Press A for menu")
    MainMenuFctn()
}
function _10sTimer () {
    TimesUsedShow += 1
    TimerFctn = 10
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(TimerFctn)
    pause(1000)
    for (let index = 0; index < 10; index++) {
        TimerFctn += -1
        NmbrCntSprt.sayText(TimerFctn)
        pause(1000)
    }
    NmbrCntSprt.destroy()
    game.splash("Timer Finished", "Press A for menu")
    MainMenuFctn()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
function RNG1100Fctn () {
    TimesUsedShow += 1
    RNGFctn = 0
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(randint(1, 100))
    pause(5000)
    NmbrCntSprt.destroy()
    game.splash("Generation Finished.", "Press A for menu")
    MainMenuFctn()
}
function _30sTimer () {
    TimesUsedShow += 1
    TimerFctn = 30
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(TimerFctn)
    pause(1000)
    for (let index = 0; index < 30; index++) {
        TimerFctn += -1
        NmbrCntSprt.sayText(TimerFctn)
        pause(1000)
    }
    NmbrCntSprt.destroy()
    game.splash("Timer Finished", "Press A for menu")
    MainMenuFctn()
}
function _60sTimer () {
    TimesUsedShow += 1
    TimerFctn = 60
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(TimerFctn)
    pause(1000)
    for (let index = 0; index < 60; index++) {
        TimerFctn += -1
        NmbrCntSprt.sayText(TimerFctn)
        pause(1000)
    }
    NmbrCntSprt.destroy()
    game.splash("Timer Finished", "Press A for menu")
    MainMenuFctn()
}
function MainMenuFctn () {
    TimesUsedShow = 0
    game.splash("Main Menu", "Select an option")
    story.showPlayerChoices("Timer", "RNG", "Credits", "RESET")
    if (story.checkLastAnswer("Timer")) {
        TimerMenuFctn()
    } else if (story.checkLastAnswer("RNG")) {
        RNGFctnMenu()
    } else if (story.checkLastAnswer("Credits")) {
        Credits()
    } else if (story.checkLastAnswer("RESET")) {
        game.reset()
    }
}
function RNG110Fctn () {
    TimesUsedShow += 1
    RNGFctn = 0
    NmbrCntSprt = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Player)
    NmbrCntSprt.sayText(randint(1, 10))
    pause(5000)
    NmbrCntSprt.destroy()
    game.splash("Generation Finished.", "Press A for menu")
    MainMenuFctn()
}
function Credits () {
    game.showLongText("A tool by Dusk", DialogLayout.Full)
    game.showLongText("MakeCode Arcade by Microsoft©", DialogLayout.Full)
    game.showLongText("All sprites by Microsoft© and MakeCode Arcade creators", DialogLayout.Full)
    game.showLongText("All coding by Dusk", DialogLayout.Full)
    MainMenuFctn()
}
function RNGFctnMenu () {
    game.splash("Generates a random number within the perameters.", "Note: RNG's are pre-set")
    story.showPlayerChoices("1-10", "1-50", "1-100", "Back")
    if (story.checkLastAnswer("1-10")) {
        RNG110Fctn()
    } else if (story.checkLastAnswer("1-50")) {
        RNG150Fctn()
    } else if (story.checkLastAnswer("1-100")) {
        RNG1100Fctn()
    } else if (story.checkLastAnswer("Back")) {
        MainMenuFctn()
    }
}
function TimerMenuFctn () {
    TimerFctn = 0
    game.splash("Starts a timer.", "Note: Timers are pre-set")
    story.showPlayerChoices("10s", "30s", "60s", "Back")
    if (story.checkLastAnswer("10s")) {
        _10sTimer()
    } else if (story.checkLastAnswer("30s")) {
        _30sTimer()
    } else if (story.checkLastAnswer("60s")) {
        _60sTimer()
    } else if (story.checkLastAnswer("Back")) {
        MainMenuFctn()
    }
}
/**
 * First menu. This is for the start point. Unused throughout the rest of the session.
 */
let TimerFctn = 0
let NmbrCntSprt: Sprite = null
let RNGFctn = 0
let TimesUsedShow = 0
let sessionlength = 0
game.splash("IF THE TOOL BUGS OUT", "Press B to reset")
story.showPlayerChoices("Start", "Credits")
if (story.checkLastAnswer("Start")) {
    MainMenuFctn()
} else {
    Credits()
}
