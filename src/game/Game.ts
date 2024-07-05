// Kaplay
import startGame, { KaboomCtx } from "kaplay";

// types
import { GameObjectProps } from "./GameObject.types";

// GameObject
import GameObject from "./GameObject";

class Game {
  private game: KaboomCtx;
  constructor() {
    this.game = startGame();
  }

  public loadAsset(assetName: string, assetPath: string) {
    this.game.loadSprite(assetName, assetPath);
  }

  public addGameObject(options: GameObjectProps) {
    const gameObject =  new GameObject(this.game, options);
    if(options.isMoving){
      gameObject.establishMovement();
    }
  }

  //get the KaboomCtx object out of the game
  public getKObject() {
    return this.game; 
  }
}


export default class GameInstance {
  private static game: Game;

  public static getGameInstance(): Game {
    if (!GameInstance.game) {
      GameInstance.game = new Game();
    }
    return GameInstance.game;
  }
}