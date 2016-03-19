import { Observable } from "rxjs";
import { Symbol } from "es6-symbol";
import { Scene } from "./scene/Scene";
import { Renderer } from "./Renderer";
import { IEventEntry, IRenderable } from "./util/interfaces";

export class Stage implements IRenderable {
  constructor(rootSelector: string) {
    
    //locate the root element
    this.root = document.querySelector(rootSelector || "body");
    
  }
  
  protected _eventStream: Observable<IEventEntry>;
  protected renderer: Renderer = new Renderer();
  protected root: Element;
  protected canvas: HTMLCanvasElement;
  protected scenes: Scene[] = [];
  
  public get eventStream() {
    return this._eventStream;
  }
  
  public lights(): Stage {
    
    //clear the root element out
    this.root.innerHTML = "";
    
    //create a canvas element and put it in the root element
    this.canvas = <HTMLCanvasElement>document.createElement("canvas");
    //fill in the whole area
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.right = "0";
    this.canvas.style.bottom = "0";
    this.root.appendChild(this.canvas);
    
    //now generate the event stream
    this.generateEventStream();
    
    return this;
  }
  
  public curtain(): Stage {
    return this;
  }
  
  public intermission(): Stage {
    return this;
  }
  
  public render(): void {
    
  }
  
  private generateEventStream() {
    //take all mousedown, mouseup, mousemove, keydown, and keyup 
    //and combine them into the event stream
    let rootEvents = "mousedown mouseup mousemove touchstart touchend touchmove touchcancel",
        documentEvents = "keydown keyup",
        streams = [];
    
    rootEvents.split(" ").forEach(event => {
      streams.push(Observable.fromEvent(this.root, event).map(e => ({
        eventType: "" + event,
        eventObject: e
      })));
    });
    
    documentEvents.split(" ").forEach(event => {
      streams.push(Observable.fromEvent(document, event).map(e => ({
        eventType: "" + event,
        eventObject: e
      })));
    });
    
    this._eventStream = (<Observable<IEventEntry>>Observable.merge.apply(Observable, streams)).share();
  }
  
  public static RIGHT: symbol = Symbol();
  public static LEFT: symbol = Symbol();
}
