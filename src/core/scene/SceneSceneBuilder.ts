import { SceneBuilder } from "./SceneBuilder";
import { SceneAction } from "./SceneAction";
import { Scene } from "./Scene";
import { ImageAsset, AudioAsset } from "../assets";


export class SceneSceneBuilder extends SceneBuilder {
  
  constructor(scene: Scene) {
    super(scene);
  }
  
  backgroundIs(imageAsset: ImageAsset) : SceneSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
  playsSound(audioAsset: AudioAsset) : SceneSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
  transitions(transition: any) : SceneSceneBuilder {
    this.scene._actions.push(new SceneAction(() => {
      //todo: implement me!
    }));
    return this;
  }
  
}
