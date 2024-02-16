import Entity from "../Entities/Entity";
import Player from "../Entities/Player";

export default class EntityManager {
  private entityList: Entity[] = [];

  public clearEntities() {
    for (const entity of this.entityList) this.removeEntity(entity);
  }

  public getEntityList() {
    return this.entityList;
  }

  public addEntity(entity: Entity) {
    this.entityList.push(entity);
  }

  public removeEntity(entity: Entity) {
    entity.remove();
    this.entityList = this.entityList.filter((e) => e !== entity);
  }
  public getPlayer() {
    for (const entity of this.entityList) {
      if (entity instanceof Player) {
        return entity;
      }
    }
  }
}
