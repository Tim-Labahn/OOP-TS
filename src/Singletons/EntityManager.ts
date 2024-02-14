import Entity from "../Entities/Entity";
import Singleton from "./Singleton";

export default class EntityManager extends Singleton<EntityManager>() {

  private entityList: Entity[] = [];

  public clearEntities() {
    for (const entity of this.entityList)
      this.removeEntity(entity)
  }

  public getEntityList() {
    return this.entityList;
  }

  public addEntity(entity: Entity) {
    this.entityList.push(entity);
  }

  public removeEntity(entity: Entity) {
    entity.remove();
    this.entityList = this.entityList.filter(e => e !== entity);
  }
}
