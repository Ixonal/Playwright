System.register(["rxjs","es6-symbol","./Renderer"],function(e,t){"use strict";var n,r,o,s;t&&t.id;return{setters:[function(e){n=e},function(e){r=e},function(e){o=e}],execute:function(){s=function(){function e(e){this.renderer=new o.Renderer,this.scenes=[],this.root=document.querySelector(e||"body")}return e.prototype.lights=function(){return this.root.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.right="0",this.canvas.style.bottom="0",this.root.appendChild(this.canvas),this.generateEventStream(),this.eventStream.filter(function(e){return"keydown"===e.eventType}).subscribe(function(e){console.log(e.eventObject.which)}),this},e.prototype.curtain=function(){return this},e.prototype.intermission=function(){return this},e.prototype.generateEventStream=function(){var e=this,t="mousedown mouseup mousemove",r="keydown keyup",o=[];t.split(" ").forEach(function(t){o.push(n.Observable.fromEvent(e.root,t).map(function(e){return{eventType:""+t,eventObject:e}}))}),r.split(" ").forEach(function(e){o.push(n.Observable.fromEvent(document,e).map(function(t){return{eventType:""+e,eventObject:t}}))}),this.eventStream=n.Observable.merge.apply(n.Observable,o)},e.RIGHT=r.Symbol(),e.LEFT=r.Symbol(),e}(),e("Stage",s)}}});
//# sourceMappingURL=Stage.js.map
