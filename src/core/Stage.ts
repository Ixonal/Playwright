import { Observable } from "rxjs";
import { Scene } from "./scene/Scene";
import { Renderer } from "./Renderer";
import { IEventEntry } from "./util/interface";

export class Stage {
  constructor(rootSelector: string) {
    
    //locate the root element
    this.root = document.querySelector(rootSelector || "body");
    
    //clear the root element out
    this.root.innerHTML = "";
    
    //create a canvas element and put it in the root element
    this.canvas = <HTMLCanvasElement>document.createElement("canvas");
    this.root.appendChild(this.canvas);
    
    //now generate the event stream
    this.generateEventStream();
    this.eventStream.filter(e => e.eventType === "keydown")
                    .subscribe(e => {
                      console.log((<KeyboardEvent>e.eventObject).which);
                    })
  }
  
  public eventStream: Observable<IEventEntry>;
  protected root: Element;
  protected canvas: HTMLCanvasElement;
  protected scenes: Scene[];
  
  public start() {
    
  }
  
  public stop() {
    
  }
  
  private generateEventStream() {
    //take all mousedown, mouseup, mousemove, keydown, and keyup 
    //and combine them into the event stream
    let targetEvents = "mousedown mouseup mousemove keydown keyup",
        streams = [];
    
    targetEvents.split(" ").forEach(event => {
      streams.push(Observable.fromEvent(this.root, "").map(e => ({
        eventType: event,
        eventObject: e
      })));
    });
    
    this.eventStream = Observable.merge.apply(Observable, streams);
    console.log(this.eventStream);
  }
}
