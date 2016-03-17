import { Scene, stage, fades } from "playwright/core/scene";

import { scene1Background, scene1Bgm } from "../assets/scene-assets";
import { blue } from "../actors/blue";

export default new Scene("Scene 1", (the) => {
  let an = the;
  
  the.scene().backgroundIs(scene1Background)
             .playsSound(scene1Bgm)
             .transitions(fades.in);
  
  an.actor(blue).enters(stage.right)
                .says("Hello World!")
                .exits(stage.left);
  
});
