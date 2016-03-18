import { Stage } from "../../../dist/core/Stage";
import { Scene, fades } from "../../../dist/core/scene";

import { scene1Background, scene1Bgm } from "../assets/scene-assets";
import { blue } from "../actors/blue";

export default new Scene("Scene 1", (the) => {
  let an = the;
  
  the.scene().backgroundIs(scene1Background)
             .playsSound(scene1Bgm)
             .transitions(fades.in);
  
  an.actor(blue).enters(Stage.right)
                .movesTo("center")
                .says("Hello World!")
                .exits(Stage.left);
  
});
