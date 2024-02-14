import GamePhysics from "../Managers/GamePhysics";

export default abstract class Entity {

    public x: number;
    public y: number;

    public sizeX: number;
    public sizeY: number;

    public texture: string;

    private id: string;

    public constructor(x: number, y: number, sizeX: number, sizeY: number, texture: string) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.texture = texture;
        this.id = Math.random().toString(36).substring(7);
    }

    private ownDivElement: HTMLDivElement | null = null;

    public render(renderTarget: HTMLElement) {
        if (!this.ownDivElement) {
            this.ownDivElement = document.createElement('div');
            renderTarget.appendChild(this.ownDivElement);
        }
        this.ownDivElement.style.position = 'absolute';
        this.ownDivElement.style.left = `${this.x - this.sizeX / 2}px`;
        this.ownDivElement.style.top = `${this.y - this.sizeY / 2}px`;
        this.ownDivElement.style.width = `${this.sizeX}px`;
        this.ownDivElement.style.height = `${this.sizeY}px`;
        this.ownDivElement.style.backgroundImage = `url(${this.texture})`;
        this.ownDivElement.style.backgroundSize = 'cover';
        this.ownDivElement.id = this.id;
    }

    public remove() {
        if (this.ownDivElement) this.ownDivElement.remove();
    }

    public abstract tick(gamePhysics: GamePhysics): void
}