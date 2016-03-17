import { Stage } from "../../dist/core/Stage";
import * as scene1 from "./scenes/scene-1";

export class Game {
  
  constructor() {
    this.stage.lights()
              .curtain();
  }
  
  protected stage: Stage = new Stage("#game-root");
  
  static instance = new Game();
}
