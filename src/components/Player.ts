import { GameObj, KaboomCtx } from "kaplay";
import GameUtils from "../game/GameUtils";
import GameInstance from "../game/Game";

export default class Player { 
    public static playerObject: GameObj;
    private static game: KaboomCtx = GameInstance.getGameInstance().getKObject(); 

    private static playerComponents = [
      Player.game.sprite('bean'),
      Player.game.area(), 
      Player.game.body(), 
      Player.game.pos(800,500),
      Player.game.anchor('center'), 
      'player'
    ]; 

    // constructor() {
    //     this.playerObject = this.create(); 
    // }

    public static create() {

      if(this.playerObject) {
        console.log("PS");
        
        return this.playerObject; 
      }

        //make the object without rendering it to the scene
        const player = Player.game.make(this.playerComponents); 

        //make the light circle around the player 
        const circle = Player.game.make([
            Player.game.circle(128), 
            Player.game.opacity(0.3), 
            Player.game.anchor("center"), 
            // Player.game.z(1),
        ]); 
        
        //attach the circle as a child to 'player' 
        player.add(circle); 
        
        //establish the movement of the player
        this.establishMovement();

        //Move the camera with the player
        player.onUpdate(() => {
          this.game.camPos(player.worldPos()); 
        }); 

        this.playerObject = player; 
        return player; 
    }

    //this function's purpose is to make the class compatible with the kaplay scenes and levels configuration
    public static getComponents() {
      return [
        Player.game.sprite('bean'),
        Player.game.area(), 
        Player.game.body(), 
        Player.game.pos(0,0),
        Player.game.anchor('center'), 
        'player',
      ]; 
    }


    private static establishMovement(){
        Player.game.onKeyDown("right", () => {
          GameUtils.moveRight(this.playerObject);
        });
    
        Player.game.onKeyDown("d", () => {
          GameUtils.moveRight(this.playerObject);
        });
    
        Player.game.onKeyDown("left", () => {
          GameUtils.moveLeft(this.playerObject);
        });
    
        Player.game.onKeyDown("a", () => {
          GameUtils.moveLeft(this.playerObject);
        });
    
        Player.game.onKeyDown("up", () => {
          GameUtils.moveUp(this.playerObject);
        });
    
        Player.game.onKeyDown("w", () => {
          GameUtils.moveUp(this.playerObject);
        });
    
        Player.game.onKeyDown("down", () => {
          GameUtils.moveDown(this.playerObject);
        });
    
        Player.game.onKeyDown("s", () => {
          GameUtils.moveDown(this.playerObject);
        });
      }
}