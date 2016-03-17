import { SceneBuilder } from "./SceneBuilder";
import { SceneAction } from "./SceneAction";
import { Scene } from "./Scene";
import {Actor} from "../actor/Actor";

export class ActorSceneBuilder extends SceneBuilder {
  actor: Actor;
  
  constructor(actor: Actor, scene: Scene) {
    super(scene);
    this.actor = actor;
  }
  
  enters(location: any) : ActorSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
  exits(location: any) : ActorSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
  movesTo(location: any) {
    this.scene._actions.push(new SceneAction(() => {
      
    }));
    return this;
  }
  
  says(dialog: string) : ActorSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
}
