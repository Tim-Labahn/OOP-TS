import EntityManager from "./EntityManager";
import Singleton from "./Singleton";

export default class Renderer extends Singleton<Renderer>() {

    private entityManager: EntityManager | null = null;
    public setEntityManager(entityManager: EntityManager) {
        this.entityManager = entityManager;
    }

    private element: HTMLElement | null = null;
    public setRenderingElement(id: string) {
        const element = document.getElementById(id);
        if (!element) throw new Error(`Element with id ${id} not found`);
        this.element = element;
    }

    public render() {
        if (!this.entityManager) throw new Error("No EntityManager set");
        if (!this.element) throw new Error("No EntityManager set");
        for (const entity of this.entityManager.getEntityList())
            entity.render(this.element)
    }
}