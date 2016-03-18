import { Scene } from "./Scene";

export interface ISceneTransition {
  (scene: Scene): void;
}

export const fades = {
  in: (scene: Scene) => {
    
  },
  out: (scene: Scene) => {
    
  }
}

export const swipes = {
  in: (scene: Scene) => {
    
  },
  out: (scene: Scene) => {
    
  }
}

export const shakes = (scene: Scene) => {
  
}

export const vibrates = (scene: Scene) => {
  
}
