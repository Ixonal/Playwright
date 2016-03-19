import { Scene } from "./Scene";
import { SceneBuilder } from "./SceneBuilder";
import { SceneSceneBuilder } from "./SceneSceneBuilder";
import { ActorSceneBuilder } from "./ActorSceneBuilder";
import { ArrayMap } from "../util/ArrayMap";
import { Actor } from "../actor/Actor";

export class SceneInterface {
  constructor(scene: Scene) {
    this._scene = scene;
  }
  
  private _scene: Scene;
  private _sceneBuilders: ArrayMap<SceneBuilder> = new ArrayMap<SceneBuilder>();
  
  public actor(actor: Actor) : ActorSceneBuilder {
    let actorBuilder: ActorSceneBuilder = <ActorSceneBuilder>this._sceneBuilders.getVal(actor);
    if(!actorBuilder) {
      actorBuilder = new ActorSceneBuilder(actor, this._scene);
      this._sceneBuilders.setVal(actor, actorBuilder);
    }
    return actorBuilder;
  }
  
  public scene() : SceneSceneBuilder {
    let sceneBuilder: SceneSceneBuilder = <SceneSceneBuilder>this._sceneBuilders.getVal(this._scene);
    if(!sceneBuilder) {
      sceneBuilder = new SceneSceneBuilder(this._scene);
      this._sceneBuilders.setVal(this._scene, sceneBuilder);
    }
    return sceneBuilder;
  }
}
