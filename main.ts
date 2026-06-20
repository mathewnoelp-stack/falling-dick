enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Walking)
    mySprite.startEffect(effects.rings, 300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function (sprite, otherSprite) {
    if (otherSprite.right - sprite.left < 2) {
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let gapSprite: Sprite = null
let gapImage: Image = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
info.setScore(0)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Walking, 25)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `)
animation.attachAnimation(mySprite, anim)
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Walking)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(1500, function () {
    gap = randint(0, 3)
    if (gap == 0) {
        topImage = img`
            ......................bbb.......
            ....................bb333b......
            .................bbb333d33b.....
            ................bb333333d3a.....
            ..............bb33332eeeedba....
            ............bbb333323eee2e3a....
            ..........bbd333333e22222ed3a...
            .......bbbdd3333333e22222edda...
            ......bb3d333333333be222eb3d3a..
            ...bbb3dd33333333333beeeb33d3a..
            ..b3ddd33333333333333333333dda..
            bbddd3333333333333333333333dd3a.
            b33dddddd3333333333333333333d3a.
            bb3333333ddddd33333333333333dda.
            bbbbbbb333dd33dddddddddd3333ddba
            b55553bbbbbb3333dd33333ddd33dd3a
            b555555555553bbbbbbbb33333dddd3a
            bd555555555555555dddbaaaaab3d3ba
            bb55555555555555555dddddddbb33ba
            b3bb35555555555d5555d55dddddbbba
            b33333bbb355dd55555d555ddddddbba
            b5555d333333bbb35dddddd55ddddbba
            b5d555dd5553333bbbbb3ddddddddb3a
            b5d555555555555dd3333bbbbbb3db3a
            bd5d555555d55555dd555ddbbbbbbb3a
            bbb55dd555555555555555ddddddbb3a
            ...bbbbdd555ddd5555ddddddddddb3a
            .......bbbb555555d5ddd5ddddddb3a
            ...........bbbb55555555555dd533a
            ...............bbbbddd5d55d5b3ba
            ...................bbbbddddb3ba.
            .......................bbbaaaa..
            `
        bottomImage = img`
            . . 2 2 b b b b b . . . . . . . 
            . 2 b 4 4 4 4 4 4 b . . . . . . 
            2 2 4 4 4 4 d d 4 4 b . . . . . 
            2 b 4 4 4 4 4 4 d 4 b . . . . . 
            2 b 4 4 4 4 4 4 4 d 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 b . . . . 
            2 b 4 4 4 4 4 4 4 4 4 e . . . . 
            2 2 b 4 4 4 4 4 4 4 b e . . . . 
            . 2 b b b 4 4 4 b b b e . . . . 
            . . e b b b b b b b e e . . . . 
            . . . e e b 4 4 b e e e b . . . 
            . . . . . e e e e e e b d b b . 
            . . . . . . . . . . . b 1 1 1 b 
            . . . . . . . . . . . c 1 d d b 
            . . . . . . . . . . . c 1 b c . 
            . . . . . . . . . . . . c c . . 
            `
    } else if (gap == 1) {
        topImage = img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `
        bottomImage = img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `
    } else if (gap == 2) {
        topImage = img`
            ...........222222ee.............
            .........2233333bbeee...........
            .......2233d1111333bee..........
            ......23ddd111dd1d33eee.........
            .....23d1333d1d33d13bee.........
            ....23d133333d1d33313eee........
            ...2311333333ddd3333dbeee.......
            ..2313333333333ddd33d3e44e......
            ..21d3333333333ddd333db44ee.....
            .2313333333333dd33333db444ee....
            .2dd3333333333d333333d3b444e....
            2311d333333333d333333ddbb444e...
            2d131d33333333d333333d1b6644e...
            2d33dd33333333d333333d1b44444e..
            21333d3333333d3333333d1644664ee.
            21333d333333d33333333d16b64464be
            21333dddd33dd33333333d1646446b6e
            2133333dd11dd33333333d1644b6446e
            e133333d1d31d33333333d1b4446446e
            e1333331d3331333333331d6bb44b6e.
            e1333331dd331b3333333136bb6bb6e.
            e13333331dd1db33333331b6b66bbe..
            edd33333311db3333333dd6bb6bbe...
            e3d3333333d333333333136beebbe...
            .edd3333333d3333333ddbfeebbe....
            .e3dd33333dd3333333d3efeeee.....
            ..e3dd333d1333333dd3bfffff......
            ...e311111ddd333dddbffeef.......
            ....eed1d33d111113befeff........
            ......eeb333dd13beffff..........
            ........eeeefffffee.............
            ................................
            `
        bottomImage = img`
            ......................bbb.......
            ....................bb333b......
            .................bbb333d33b.....
            ................bb333333d3a.....
            ..............bb33332eeeedba....
            ............bbb333323eee2e3a....
            ..........bbd333333e22222ed3a...
            .......bbbdd3333333e22222edda...
            ......bb3d333333333be222eb3d3a..
            ...bbb3dd33333333333beeeb33d3a..
            ..b3ddd33333333333333333333dda..
            bbddd3333333333333333333333dd3a.
            b33dddddd3333333333333333333d3a.
            bb3333333ddddd33333333333333dda.
            bbbbbbb333dd33dddddddddd3333ddba
            b55553bbbbbb3333dd33333ddd33dd3a
            b555555555553bbbbbbbb33333dddd3a
            bd555555555555555dddbaaaaab3d3ba
            bb55555555555555555dddddddbb33ba
            b3bb35555555555d5555d55dddddbbba
            b33333bbb355dd55555d555ddddddbba
            b5555d333333bbb35dddddd55ddddbba
            b5d555dd5553333bbbbb3ddddddddb3a
            b5d555555555555dd3333bbbbbb3db3a
            bd5d555555d55555dd555ddbbbbbbb3a
            bbb55dd555555555555555ddddddbb3a
            ...bbbbdd555ddd5555ddddddddddb3a
            .......bbbb555555d5ddd5ddddddb3a
            ...........bbbb55555555555dd533a
            ...............bbbbddd5d55d5b3ba
            ...................bbbbddddb3ba.
            .......................bbbaaaa..
            `
    } else {
        topImage = img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `
        bottomImage = img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `
    }
    gapImage = image.create(2, scene.screenHeight())
    gapImage.fill(1)
    gapSprite = sprites.create(gapImage, SpriteKind.Gap)
    gapSprite.setFlag(SpriteFlag.AutoDestroy, true)
    gapSprite.setFlag(SpriteFlag.Invisible, true)
    gapSprite.left = scene.screenWidth()
    gapSprite.vx = -45
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
