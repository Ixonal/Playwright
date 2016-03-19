
export default function indexOf(arr: any[], selector: Function | any): number {
  if(!arr) return null;
  
  if(typeof selector !== "function") {
    selector = item => item === selector;
  }
  
  let index = arr.length;
  while(index--) {
    if(selector(arr[index])) return index;
  }
  
  return index;
}
