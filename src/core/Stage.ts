import { Observable } from "rxjs";
import { Scene } from "./scene/Scene";
import { Renderer } from "./Renderer";
import { IEventEntry } from "./util/interface";

export class Stage {
  constructor(rootSelector: string) {
    
    //locate the root element
    this.root = document.querySelector(rootSelector || "body");
    
  }
  
  public eventStream: Observable<IEventEntry>;
  protected renderer: Renderer = new Renderer();
  protected root: Element;
  protected canvas: HTMLCanvasElement;
  protected scenes: Scene[] = [];
  
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
    this.eventStream.filter(e => e.eventType === "keydown")
                    .subscribe(e => {
                      console.log((<KeyboardEvent>e.eventObject).which);
                    })
    
    return this;
  }
  
  public curtain(): Stage {
    return this;
  }
  
  public intermission(): Stage {
    return this;
  }
  
  private generateEventStream() {
    //take all mousedown, mouseup, mousemove, keydown, and keyup 
    //and combine them into the event stream
    let rootEvents = "mousedown mouseup mousemove",
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
    
    this.eventStream = Observable.merge.apply(Observable, streams);
    
    //this.eventStream.subscribe(event => console.log(event.eventType));
  }
}
