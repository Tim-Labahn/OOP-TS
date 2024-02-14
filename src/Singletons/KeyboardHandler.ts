export default class KeyboardHandler {

  private keyMap: Map<string, boolean> = new Map();

  private constructor() {
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


  private static instance: KeyboardHandler;

  public static getInstance() {
    if (!KeyboardHandler.instance)
      KeyboardHandler.instance = new KeyboardHandler();

    return KeyboardHandler.instance;
  }

}
