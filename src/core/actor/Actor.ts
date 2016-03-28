import { IPositionable, IPosition } from "../positioning";
import { IRenderable } from "../rendering";
import { ImageAsset } from "../assets";

export class Actor implements IPositionable, IRenderable {
  protected _position: IPosition = {};
  protected _props: ImageAsset[] = [];
  
  public setPosition(position: IPosition) {
    this._position = position; 
  }
  
  public render() {
    
  }
  
}
