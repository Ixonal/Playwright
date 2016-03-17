
export interface IPromiseLike {
  then(complete: (...args) => any, failed: (...args) => any): IPromiseLike;
}
