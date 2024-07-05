import { KaboomCtx } from "kaplay";
import GameInstance from "../game/Game";

export default class Grass { 
    // public grassObject: GameObj;
    private static game: KaboomCtx = GameInstance.getGameInstance().getKObject(); 
    
    private static grassComponents = [
        Grass.game.sprite('grass'), 
        Grass.game.area(), 
        Grass.game.body({isStatic: true, }), 
        Grass.game.pos(),
        'grass'
      ]; 

    // constructor() {
    //     this.grassObject = this.create(); 
    // }

    
    public static create() {
        const object = Grass.game.make(this.grassComponents); 

        return object; 
    }

    public static getComponents() {
        return [
            Grass.game.sprite('grass'), 
            Grass.game.area(), 
            Grass.game.body({isStatic: true}), 
            Grass.game.pos(),
            Grass.game.anchor('center'),
            'grass'
          ]; 
    }
}