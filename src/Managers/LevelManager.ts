import Wall from "../Entities/Wall";
import EntityManager from "./EntityManager";
import Player from "../Entities/Player";
import Goal from "../Entities/Goal";
import Coin from "../Entities/Coin";
import Enemy from "../Entities/Enemy";

const LEVELS = [
  `
WWWWWWWWWWWWW
WPWC W C CE W
W W WWWWW WWW
WCWC C C CWWW
W W WWW WWWWW
WC C WWCECEGW
WWWWWWWWWWWWW`,
];

export default class LevelManager {
  private entityManager: EntityManager;

  public constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  private currentLevel = 0;
  public canWin = false;

  public loadNextLevel() {
    this.currentLevel++;
    if (this.currentLevel >= LEVELS.length) this.currentLevel = 0;
    this.loadLevel();
  }

  public checkWin() {
    if (
      !this.entityManager.getEntityList().filter((a) => a instanceof Coin)
        .length
    ) {
      this.canWin = true;
    } else {
      this.canWin = false;
    }
  }

  public loadLevel() {
    const map = LEVELS[this.currentLevel].trim();

    this.entityManager.clearEntities();

    map.split("\n").forEach((row, y) => {
      row.split("").forEach((cell, x) => {
        if (cell === "W")
          this.entityManager.addEntity(
            new Wall(
              x * 50 + 50,
              y * 50 + 50,
              50,
              50,
              "https://picsum.photos/50/50"
            )
          );

        if (cell === "P")
          this.entityManager.addEntity(
            new Player(x * 50 + 50, y * 50 + 50, 40, 40, "./Player.png")
          );

        if (cell === "C")
          this.entityManager.addEntity(
            new Coin(
              x * 50 + 50,
              y * 50 + 50,
              50,
              50,
              "./Coin.png",
              this.entityManager
            )
          );
        if (cell === "E")
          this.entityManager.addEntity(
            new Enemy(
              x * 50 + 50,
              y * 50 + 50,
              40,
              40,
              "https://picsum.photos/40/40?id=2",
              this
            )
          );
        if (cell === "G")
          this.entityManager.addEntity(
            new Goal(
              x * 50 + 50,
              y * 50 + 50,
              40,
              40,
              "https://picsum.photos/40/40?id=2",
              this
            )
          );
      });
    });
  }
}
