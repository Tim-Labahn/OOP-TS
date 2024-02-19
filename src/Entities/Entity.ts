import GamePhysics from "../Managers/GamePhysics";

export default abstract class Entity {
  public x: number;
  public y: number;

  public sizeX: number;
  public sizeY: number;

  public texture: string;

  public id: string;

  public constructor(
    x: number,
    y: number,
    sizeX: number,
    sizeY: number,
    texture: string
  ) {
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.texture = texture;
    this.id = Math.random().toString(36).substring(7);
  }

  protected hasMovementCollision = true;

  public getMovementCollision() {
    return this.hasMovementCollision;
  }

  public abstract tick(gamePhysics: GamePhysics): void;
}
