import Coin from "../Entities/Coin";
import Entity from "../Entities/Entity";
import Wall from "../Entities/Wall";
import EntityManager from "./EntityManager";

export default class GamePhysics {
  private entityManager: EntityManager;

  public constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  public tick() {
    for (const entity of this.entityManager.getEntityList()) entity.tick(this);
  }

  public collidesInDirection(
    entity: Entity,
    direction: "up" | "down" | "left" | "right",
    offset: number
  ) {
    for (const otherEntity of this.entityManager
      .getEntityList()
      .filter((a) => a.getMovementCollision())) {
      if (entity === otherEntity) continue;
      if (direction === "up") {
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x - entity.sizeY / 2,
            entity.y - entity.sizeY / 2 - offset
          )
        )
          return true;
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x + entity.sizeY / 2,
            entity.y - entity.sizeY / 2 - offset
          )
        )
          return true;
      }
      if (direction === "down") {
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x - entity.sizeY / 2,
            entity.y + entity.sizeY / 2 + offset
          )
        )
          return true;
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x + entity.sizeY / 2,
            entity.y + entity.sizeY / 2 + offset
          )
        )
          return true;
      }
      if (direction === "left") {
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x - entity.sizeX / 2 - offset,
            entity.y - entity.sizeY / 2
          )
        )
          return true;
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x - entity.sizeX / 2 - offset,
            entity.y + entity.sizeY / 2
          )
        )
          return true;
      }
      if (direction === "right") {
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x + entity.sizeX / 2 + offset,
            entity.y - entity.sizeY / 2
          )
        )
          return true;
        if (
          this.isInBoundingBox(
            otherEntity,
            entity.x + entity.sizeX / 2 + offset,
            entity.y + entity.sizeY / 2
          )
        )
          return true;
      }
    }
    return false;
  }

  public getCollidingEntities(entity: Entity, offset: number = 3) {
    return this.entityManager
      .getEntityList()
      .filter((e) => e !== entity && this.isColliding(entity, e, offset));
  }

  private isColliding(entity1: Entity, entity2: Entity, offset: number) {
    return (
      entity1.x - entity1.sizeX / 2 - offset < entity2.x + entity2.sizeX / 2 &&
      entity1.x + entity1.sizeX / 2 + offset > entity2.x - entity2.sizeX / 2 &&
      entity1.y - entity1.sizeY / 2 - offset < entity2.y + entity2.sizeY / 2 &&
      entity1.y + entity1.sizeY / 2 + offset > entity2.y - entity2.sizeY / 2
    );
  }

  private isInBoundingBox(entity: Entity, x: number, y: number) {
    return (
      x > entity.x - entity.sizeX / 2 &&
      x < entity.x + entity.sizeX / 2 &&
      y > entity.y - entity.sizeY / 2 &&
      y < entity.y + entity.sizeY / 2
    );
  }
}
