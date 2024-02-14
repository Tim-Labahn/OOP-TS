import Singleton from "./Singleton";

export default class KeyboardHandler extends Singleton<KeyboardHandler>() {

  private keyMap: Map<string, boolean> = new Map();

  private constructor() {
    super();
    document.addEventListener("keydown", (evt: KeyboardEvent) => {
      this.keyMap.set(evt.key, true);
    });
    document.addEventListener("keyup", (evt: KeyboardEvent) => {
      this.keyMap.set(evt.key, false);
    });
  }

  public isKeyDown(key: string) {
    return this.keyMap.get(key) || false;
  }
}
