import Player from "../Entities/Player";
import EntityManager from "./EntityManager";

export default class Renderer {
  private entityManager: EntityManager;
  private element: HTMLElement;

  public constructor(renderingTargetId: string, entityManager: EntityManager) {
    const element = document.getElementById(renderingTargetId);
    if (!element)
      throw new Error(`Element with id ${renderingTargetId} not found`);
    this.element = element;

    this.entityManager = entityManager;
  }

  public render() {
    for (const entity of this.entityManager.getEntityList()) {
      entity.render(this.element);
    }

    this.renderInterface(this.element);
  }

  private displayCoinElement: HTMLDivElement | null = null;

  private renderInterface(element) {
    if (!this.displayCoinElement) {
      this.displayCoinElement = document.createElement("div");
      this.element.appendChild(this.displayCoinElement);
    }

    this.displayCoinElement.innerText =
      this.entityManager.getPlayer()?.coins.toString() || "0";
    this.displayCoinElement.style.position = "absolute";
    this.displayCoinElement.style.top = "0"; // Adjust these values to position the coinCounter
    this.displayCoinElement.style.left = "0";
    this.displayCoinElement.style.width = `100px`;
    this.displayCoinElement.style.height = `20px`;
    this.displayCoinElement.style.backgroundSize = "cover";
    this.displayCoinElement.style.color = "white";
  }
}
