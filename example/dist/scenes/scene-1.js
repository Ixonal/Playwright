System.register(["../../../dist/core/scene","../assets/scene-assets","../actors/blue"],function(e,s){"use strict";var n,t,c;s&&s.id;return{setters:[function(e){n=e},function(e){t=e},function(e){c=e}],execute:function(){e("default",new n.Scene("Scene 1",function(e){var s=e;e.scene().backgroundIs(t.scene1Background).playsSound(t.scene1Bgm).transitions(n.fades["in"]),s.actor(c.blue).enters(n.stage.right).movesTo("center").says("Hello World!").exits(n.stage.left)}))}}});