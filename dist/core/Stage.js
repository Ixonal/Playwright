System.register(["rxjs"],function(e,t){"use strict";var n,o;t&&t.id;return{setters:[function(e){n=e}],execute:function(){o=function(){function e(e){this.root=document.querySelector(e||"body"),this.root.innerHTML="",this.canvas=document.createElement("canvas"),this.root.appendChild(this.canvas),this.generateEventStream(),this.eventStream.filter(function(e){return"keydown"===e.eventType}).subscribe(function(e){console.log(e.eventObject.which)})}return e.prototype.start=function(){},e.prototype.stop=function(){},e.prototype.generateEventStream=function(){var e=this,t="mousedown mouseup mousemove keydown keyup",o=[];t.split(" ").forEach(function(t){o.push(n.Observable.fromEvent(e.root,"").map(function(e){return{eventType:t,eventObject:e}}))}),this.eventStream=n.Observable.merge.apply(n.Observable,o),console.log(this.eventStream)},e}(),e("Stage",o)}}});
//# sourceMappingURL=Stage.js.map