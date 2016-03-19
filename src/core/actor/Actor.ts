import { IPositionable, IPosition } from "../util/interfaces";

export class Actor implements IPositionable {
  protected _position: IPosition = {};
  
  public setPosition(position: IPosition) {
    this._position = position; 
  }
  
}
