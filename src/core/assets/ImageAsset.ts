import { Asset } from "./Asset";
import { IRenderable, IPositionable, IPosition } from "../util/interfaces";

export abstract class ImageAsset extends Asset implements IRenderable, IPositionable {
  
  protected _position: IPosition = {}
  
  public abstract render(): void;
  
  public setPosition(position: IPosition): void {
    this._position = position;
    this.render();
  }
  
}
