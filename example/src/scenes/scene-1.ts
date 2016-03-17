import { Scene, stage, fades } from "../../../dist/core/scene";

import { scene1Background, scene1Bgm } from "../assets/scene-assets";
import { blue } from "../actors/blue";

export default new Scene("Scene 1", (the) => {
  let an = the;
  
  the.scene().backgroundIs(scene1Background)
             .playsSound(scene1Bgm)
             .transitions(fades.in);
  
  an.actor(blue).enters(stage.right)
                .movesTo("center")
                .says("Hello World!")
                .exits(stage.left);
  
});
