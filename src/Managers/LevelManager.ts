import Wall from "../Entities/Wall";
import EntityManager from "./EntityManager";
import Player from "../Entities/Player";
import Goal from "../Entities/Goal";

const LEVELS = [
    `
WWWWWWWWWWWWW
WPW  W      W
W W WWWWW WWW
W W       WWW
W W WWW WWWWW
W    WW    GW
WWWWWWWWWWWWW`,
    `
WWWWWWWWWWWWW
WW          W
W   WWWWW WWW
W W  W    WWW
W W WWW WWWWW
WGW  WW    PW
WWWWWWWWWWWWW`,
    `
WWWWWWWWWWWWW
WWW        GW
W   WW WWWWWW
W W  W    WWW
W W WWW WWWWW
WPW         W
WWWWWWWWWWWWW`,
    `
WWWWWWWWWWWWW
WGW        PW
W  WWWWWWW WW
W    W     WW
W W WWW WWWWW
W W         W
WWWWWWWWWWWWW`,
]

export default class LevelManager {

    private entityManager: EntityManager;

    public constructor(entityManager: EntityManager) {
        this.entityManager = entityManager;
    }

    private currentLevel = 0;

    public loadNextLevel() {
        this.currentLevel++;
        if (this.currentLevel >= LEVELS.length) this.currentLevel = 0;
        this.loadLevel();
    }

    public loadLevel() {
        const map = LEVELS[this.currentLevel].trim()

        this.entityManager.clearEntities();

        map.split('\n').forEach((row, y) => {
            row.split('').forEach((cell, x) => {
                if (cell === 'W')
                    this.entityManager.addEntity(new Wall(x * 50 + 50, y * 50 + 50, 50, 50, "https://picsum.photos/50/50"))

                if (cell === 'P')
                    this.entityManager.addEntity(new Player(x * 50 + 50, y * 50 + 50, 40, 40, "https://picsum.photos/40/40"))

                if (cell === 'G')
                    this.entityManager.addEntity(new Goal(x * 50 + 50, y * 50 + 50, 40, 40, "https://picsum.photos/40/40?id=2", this))
            })
        });
    }
}
