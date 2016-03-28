import { Observable } from "rxjs";
import { Symbol } from "es6-symbol";
import { Scene } from "./scene/Scene";
import { IRenderable, Renderer } from "./rendering";
import { EventFactory } from "./events/EventFactory";

export class Stage implements IRenderable {
  constructor(rootSelector: string) {
    
    //locate the root element
    this._root = document.querySelector(rootSelector || "body");
    
    this._eventFactory = new EventFactory(this);
  }
  
  protected _renderer: Renderer = null;
  protected _root: Element;
  protected _canvas: HTMLCanvasElement;
  protected _scenes: Scene[] = [];
  protected _eventFactory: EventFactory = null;
  
  public get eventStream() {
    return this._eventFactory.eventStream;
  }
  
  public get root() {
    return this._root;
  }
  
  public lights(): Stage {
    
    //clear the root element out
    this._root.innerHTML = "";
    
    //create a canvas element and put it in the root element
    this._canvas = <HTMLCanvasElement>document.createElement("canvas");
    //fill in the whole area
    this._canvas.style.top = "0";
    this._canvas.style.left = "0";
    this._canvas.style.right = "0";
    this._canvas.style.bottom = "0";
    this._root.appendChild(this._canvas);
    
    //create a renderer for the canvas
    this._renderer = new Renderer(this._canvas);
    
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
  
  public static RIGHT: symbol = Symbol();
  public static LEFT: symbol = Symbol();
}
