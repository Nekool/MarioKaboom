import kaboom from "kaboom";

const c = kaboom({
    clearColor : [0,0,0,1],
    global: false
});
c.scene('main', ()=>{
    c.add([
        c.text("hello there" ,32),
        c.color(1,1,1),
        c.pos(c.width() / 2, c.height() / 2),
        c.origin("center")
    ])
});
