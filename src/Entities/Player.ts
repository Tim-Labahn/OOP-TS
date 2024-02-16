import Entity from "./Entity";
import GamePhysics from "../Managers/GamePhysics";
import KeyboardHandler from "../Singletons/KeyboardHandler";

export default class Player extends Entity {
  keyboardHandler: KeyboardHandler;

  public constructor(
    x: number,
    y: number,
    sizeX: number,
    sizeY: number,
    texture: string
  ) {
    super(x, y, sizeX, sizeY, texture);

    this.keyboardHandler = KeyboardHandler.getInstance();
  }
  public coins = 0;

  public addCoins() {
    return this.coins++;
  }

  private movementKeys = {
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
  };

  public movementSpeed = 3;

  public setMovementKeys(
    up: string,
    down: string,
    left: string,
    right: string
  ) {
    this.movementKeys = { up, down, left, right };
  }

  public getMovementKey(key: "up" | "down" | "left" | "right") {
    return this.movementKeys[key];
  }

  public tick(gamePhysics: GamePhysics) {
    if (
      this.keyboardHandler.isKeyDown(this.getMovementKey("up")) &&
      !gamePhysics.collidesInDirection(this, "up", this.movementSpeed)
    )
      this.y -= this.movementSpeed;
    if (
      this.keyboardHandler.isKeyDown(this.getMovementKey("down")) &&
      !gamePhysics.collidesInDirection(this, "down", this.movementSpeed)
    )
      this.y += this.movementSpeed;
    if (
      this.keyboardHandler.isKeyDown(this.getMovementKey("left")) &&
      !gamePhysics.collidesInDirection(this, "left", this.movementSpeed)
    )
      this.x -= this.movementSpeed;
    if (
      this.keyboardHandler.isKeyDown(this.getMovementKey("right")) &&
      !gamePhysics.collidesInDirection(this, "right", this.movementSpeed)
    )
      this.x += this.movementSpeed;
  }
}
