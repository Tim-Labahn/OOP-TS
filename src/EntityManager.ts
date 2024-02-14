import Entity from "./Entity";


export default class EntityManager {

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

  private constructor() { }

  private static instance: EntityManager;

  public static getInstance() {
    if (!EntityManager.instance)
      EntityManager.instance = new EntityManager();

    return EntityManager.instance;
  }

}
