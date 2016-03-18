import { IPosition } from "./IPosition";

export interface IPositionable {
  setPosition(position: IPosition): void;
}
