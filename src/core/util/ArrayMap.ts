import indexOf from "./indexOf";

export class ArrayMap<T> {
  
  private _keys: any[] = [];
  private _vals: T[] = [];
  
  public getVal(key: any): T {
    let index = indexOf(this._keys, key);
    
    return this._vals[index] || null;
  }
  
  public setVal(key: any, val: T) {
    let index = indexOf(this._keys, key);
    
    if(index > -1) {
      this._vals[index] = val;
    } else {
      this._keys.push(key);
      this._vals.push(val);
    }
  }
  
}
