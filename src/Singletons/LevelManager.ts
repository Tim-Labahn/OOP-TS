import Entity from "../Entities/Entity";
import EntityManager from "./EntityManager";
import KeyboardHandler from "./KeyboardHandler";
import Player from "../Entities/Player";
import Goal from "../Entities/Goal";


export default class LevelManager {

  private constructor() { }

  private static instance: LevelManager;

  public static getInstance() {
    if (!LevelManager.instance)
      LevelManager.instance = new LevelManager();

    return LevelManager.instance;
  }

  private entityManager: EntityManager | null = null;
  public setEntityManager(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  private LEVELS = [
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

  private currentLevel = 0;

  public loadNextLevel() {
    console.log("loading next level")
    this.currentLevel++;
    if (this.currentLevel >= this.LEVELS.length) this.currentLevel = 0;
    this.loadLevel();
  }

  public loadLevel() {
    if (!this.entityManager) throw new Error("No EntityManager set");

    const entityManager = this.entityManager

    const keyboardHandler = KeyboardHandler.getInstance();

    const map = this.LEVELS[this.currentLevel].trim()

    entityManager.clearEntities();

    map.split('\n').forEach((row, y) => {
      row.split('').forEach((cell, x) => {
        if (cell === 'W')
          entityManager.addEntity(new Entity(x * 50 + 50, y * 50 + 50, 50, 50, "https://picsum.photos/50/50"))

        if (cell === 'P')
          entityManager.addEntity(new Player(x * 50 + 50, y * 50 + 50, 40, 40, "https://picsum.photos/40/40", keyboardHandler))

        if (cell === 'G')
          entityManager.addEntity(new Goal(x * 50 + 50, y * 50 + 50, 40, 40, "https://picsum.photos/40/40?id=2", this))

      })
    });

  }

}
