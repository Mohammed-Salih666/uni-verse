import GameInstance from "./game/Game";

import Grass from "./components/Grass";
import { GameScene } from "./game/GameScene";

//init game
const game = GameInstance.getGameInstance();
const k = game.getKObject(); 
k.setBackground(k.rgb(64, 128, 255));

//we always have to load the assets from main

game.loadAsset("bean", "src/sprites/bean.png");
game.loadAsset("grass", "src/sprites/grass.png"); 

//insert the curent level design

//NOTE: the '@' sign was supposed to be the player, and it worked and rendered fine when the whole thing was hard-coded, 
//but it stopped working when I made it more dynamic. So I took this different approach since there will always be one main player. 

const LEVEL = [
    "==========================", 
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=             @          =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "=                        =",
    "==========================", 
  ]; 


//specify level options: 
const levelOptions = {
  tileWidth: 64, 
  tileHeight: 64, 
  pos: k.vec2(110, 110), 
  tiles: {
    "=": Grass.getComponents, 
    // "@": Player.getComponents, 
  }
};

//create new scene for the level

const scene = new GameScene('game', LEVEL, levelOptions); 
scene.init(); 

//go to that scene
k.go('game'); 