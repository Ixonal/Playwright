import { Stage } from "playwright/core/Stage";
import * as scene1 from "./scenes/scene-1";

export class Game {
  
  constructor() {
    this.engine.start();
  }
  
  protected engine: Stage = new Stage("#game-root");
  
  static game = new Game();
}
