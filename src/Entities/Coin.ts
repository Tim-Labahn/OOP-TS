import Entity from "./Entity";
import GamePhysics from "../Managers/GamePhysics";
import Player from "./Player";
import EntityManager from "../Managers/EntityManager";

export default class Coin extends Entity {
  private entityManager: EntityManager;

  public constructor(
    x: number,
    y: number,
    sizeX: number,
    sizeY: number,
    texture: string,
    entityManager: EntityManager
  ) {
    super(x, y, sizeX, sizeY, texture);
    this.entityManager = entityManager;
  }

  public tick(gamePhysics: GamePhysics) {
    if (
      gamePhysics.getCollidingEntities(this, 3).some((e) => e instanceof Player)
    ) {
      this.entityManager.removeEntity(this);
      this.entityManager.getPlayer()?.addCoins();
    }
  }
}
