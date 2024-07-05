import { KaboomCtx, LevelOpt } from "kaplay";
import GameInstance from "./Game";
import Player from "../components/Player";

export class GameScene {
    private k: KaboomCtx; 
    private levelDesign: string[]; 
    private name: string; 
    private options: LevelOpt; 
    
    constructor(sceneName: string, levelDesign: string[], options: LevelOpt) {
        this.k = GameInstance.getGameInstance().getKObject(); 
        this.levelDesign = levelDesign; 
        this.name = sceneName; 
        this.options = options;
    }

    public init() {
        this.k.scene(this.name, () => {
            const level = this.k.addLevel(this.levelDesign, this.options); 
        
            //create the player
            const player = Player.create(); 

            //render the player within the current scene level
            level.add(player); 

            //zoom-in
            this.k.camScale(1.2, 1.2); 
        });
    }
}