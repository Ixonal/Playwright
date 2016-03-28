import { Stage } from "../Stage";
import { Observable } from "rxjs";
import { IEventEntry } from "./IEventEntry";

export class EventFactory {
  constructor(stage: Stage) {
    this.stage = stage;
    
    this.initEventStream();
  }
  
  private stage: Stage = null;
  private _eventStream: Observable<IEventEntry> = null;
  
  public get eventStream() {
    return this._eventStream;
  }
  
  private initEventStream() {
    //take all mousedown, mouseup, mousemove, keydown, and keyup 
    //and combine them into the event stream
    let rootEvents = "mousedown mouseup mousemove touchstart touchend touchmove touchcancel",
        documentEvents = "keydown keyup",
        streams = [];
    
    rootEvents.split(" ").forEach(event => {
      streams.push(Observable.fromEvent(this.stage.root, event).map(e => ({
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
}
