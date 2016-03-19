import { SceneAction } from "./SceneAction";
import { SceneInterface } from "./SceneInterface";
import { Stage } from "../Stage";

export class Scene {
  
  constructor(name: string, script: (a: SceneInterface) => void) {
    this._name = name;
    script(new SceneInterface(this));
  }
  
  _name: string;
  _actions: SceneAction[] = [];
  
  public get name() {
    return this._name;
  }
  
  public play(stage: Stage) {
    //todo: do something with the scene actions and the stage here...
  }
}
