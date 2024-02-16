import Entity from "./Entity";
import GamePhysics from "../Managers/GamePhysics";
import LevelManager from "../Managers/LevelManager";
import Player from "./Player";

export default class Goal extends Entity {
  private levelManager: LevelManager;

  public constructor(
    x: number,
    y: number,
    sizeX: number,
    sizeY: number,
    texture: string,
    levelManager: LevelManager
  ) {
    super(x, y, sizeX, sizeY, texture);

    this.levelManager = levelManager;
  }

  public tick(gamePhysics: GamePhysics) {
    this.levelManager.checkWin();

    if (!this.levelManager.canWin) return;
    if (gamePhysics.getCollidingEntities(this).some((e) => e instanceof Player))
      this.levelManager.loadNextLevel();
  }
}
