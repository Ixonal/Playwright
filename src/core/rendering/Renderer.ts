import { IRenderable } from "./IRenderable";

export class Renderer {
  
  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
  }
  
  protected _canvas: HTMLCanvasElement = null;
  
  public render(renderable: IRenderable) {
    
  }
}
