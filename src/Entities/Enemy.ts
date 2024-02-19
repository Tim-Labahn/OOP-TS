import Entity from "./Entity";
import GamePhysics from "../Managers/GamePhysics";
import LevelManager from "../Managers/LevelManager";
import Player from "./Player";

export default class Enemy extends Entity {
  levelManager: LevelManager;
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
    this.hasMovementCollision = true;
  }

  private moveSpeed = 2;

  private moveDirection = "left";

  private move(gamePhysics: GamePhysics) {
    if (
      this.moveDirection == "right" &&
      !gamePhysics.collidesInDirection(this, "right", 1)
    ) {
      this.x += this.moveSpeed;
    } else if (
      this.moveDirection == "right" &&
      gamePhysics.collidesInDirection(this, "right", 1)
    ) {
      this.moveDirection = "left";
    }
    if (
      this.moveDirection == "left" &&
      !gamePhysics.collidesInDirection(this, "left", 1)
    ) {
      this.x -= this.moveSpeed;
    } else if (
      this.moveDirection == "left" &&
      gamePhysics.collidesInDirection(this, "left", 1)
    ) {
      this.moveDirection = "right";
    }
  }

  public tick(gamePhysics: GamePhysics) {
    this.move(gamePhysics);
    if (
      gamePhysics.getCollidingEntities(this).some((e) => e instanceof Player)
    ) {
      this.levelManager.loadLevel();
    }
  }
}
