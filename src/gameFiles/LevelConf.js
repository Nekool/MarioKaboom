import c from "./KboomDefinition"

const LevelConf = {
    width: 16,
    height: 16,
    pos: c.vec2(0, 0),
    "=": () => [
        c.sprite("ground")
    ]
    // "p": () => [
    //     c.sprite("mario", { frame: 0 }),
    //     c.area({ width: 16, height: 16 }),
    //     c.body(),
    // ]
}
export default LevelConf;
