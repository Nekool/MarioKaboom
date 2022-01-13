import c from "./KboomDefinition";

c.loadRoot("/Sprites");
c.loadAseprite("mario", "/Characters/Mario.png", "/Characters/Mario.json").then();

c.loadSpriteAtlas("/TileSets/Overworld.png",{
    "ground": {
        x: 0,
        y: 0,
        width: 16,
        height: 16,
        sliceX: 9,
    }
});
// c.loadSprite("ground","/Characters/Mario.png");
// c.loadAseprite("enemies", "/Characters/Enemies.png", "/Characters/Enemies.json");
// c.loadAseprite("enemies", "/Characters/Enemies.png", "/Characters/Enemies.json");


