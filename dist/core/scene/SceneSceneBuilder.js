System.register(["./SceneBuilder","./SceneAction"],function(n,t){"use strict";var e,c,i,o=(t&&t.id,this&&this.__extends||function(n,t){function e(){this.constructor=n}for(var c in t)t.hasOwnProperty(c)&&(n[c]=t[c]);n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});return{setters:[function(n){e=n},function(n){c=n}],execute:function(){i=function(n){function t(t){n.call(this,t)}return o(t,n),t.prototype.backgroundIs=function(n){return this.scene._actions.push(new c.SceneAction(function(){})),this},t.prototype.playsSound=function(n){return this.scene._actions.push(new c.SceneAction(function(){})),this},t.prototype.transitions=function(n){return this.scene._actions.push(new c.SceneAction(function(){})),this},t}(e.SceneBuilder),n("SceneSceneBuilder",i)}}});
//# sourceMappingURL=SceneSceneBuilder.js.map
