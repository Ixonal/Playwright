import { Promise } from "bluebird";
import { Actor } from "../actor/Actor";
import { ActorSceneBuilder } from "./ActorSceneBuilder";
import { SceneSceneBuilder } from "./SceneSceneBuilder";
import { SceneAction } from "./SceneAction";

export class Scene {
  
  _name: string;
  _actions: SceneAction[] = [];
  
  constructor(name: string, script: (a: Scene) => void) {
    this._name = name;
    script(this);
  }
  
  actor(actor: Actor) : ActorSceneBuilder {
    return new ActorSceneBuilder(actor, this);
  }
  
  scene() : SceneSceneBuilder {
    return new SceneSceneBuilder(this);
  }
}
