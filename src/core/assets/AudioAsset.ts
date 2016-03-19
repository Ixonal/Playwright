import { Asset } from "./Asset";

export class AudioAsset extends Asset {
  constructor(src: string) {
    super();
    
    this._src = src;
  }
  
  private _src: string;
  
  public load() {
    
  }
}
