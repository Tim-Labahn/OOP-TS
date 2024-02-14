import EntityManager from "./EntityManager";

export default class Renderer {

    private entityManager: EntityManager;
    private element: HTMLElement;

    public constructor(renderingTargetId: string, entityManager: EntityManager) {
        const element = document.getElementById(renderingTargetId);
        if (!element) throw new Error(`Element with id ${renderingTargetId} not found`);
        this.element = element;

        this.entityManager = entityManager;
    }

    public render() {
        if (!this.entityManager) throw new Error("No EntityManager set");
        if (!this.element) throw new Error("No EntityManager set");
        for (const entity of this.entityManager.getEntityList())
            entity.render(this.element)
    }
}