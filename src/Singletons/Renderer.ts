import EntityManager from "./EntityManager";

export default class Renderer {

    private element: HTMLElement | null = null;
    private entityManager: EntityManager | null = null;

    private constructor() { }

    private static instance: Renderer;

    public static getInstance() {
        if (!Renderer.instance)
            Renderer.instance = new Renderer();

        return Renderer.instance;
    }

    public setEntityManager(entityManager: EntityManager) {
        this.entityManager = entityManager;
    }

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