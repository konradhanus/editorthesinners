import {BLOCK} from "./../levels/type";

const dirt1 = "./assets/dirt1.png";
const dirt2 = "./assets/dirt2.png";
const dirt3 = "./assets/dirt3.png";
const dirt4 = "./assets/4.png";
const dirt5 = "./assets/5.png";
const dirt6 = "./assets/6.png";
const dirt7 = "./assets/7.png";
const dirt8 = "./assets/8.png";
const dirt9 = "./assets/9.png";
const dirt10 = "./assets/10.png";
const dirt11 = "./assets/11.png";
const dirt12 = "./assets/12.png";
const dirt13 = "./assets/13.png";
const dirt14 = "./assets/14.png";
const dirt15 = "./assets/15.png";
const dirt16 = "./assets/16.png";
const dirt17 = "./assets/17.png";
const dirt18 = "./assets/18.png";
const background = "./assets/background.png";
const layer1 = "./assets/bg_layer1.png";
const layer2 = "./assets/bg_layer2.png";
const layer3 = "./assets/bg_layer3.png";
const layer4 = "./assets/bg_layer4.png";
const enemy = "./assets/enemy.png";
const wizzard = "./assets/tom.png";
const water = "./assets/water.png";
const box = "./assets/box.png";
const hero = "./assets/hero.png";
const star = "./assets/star.png";

const backgroundElement = [
    { path: background, name: 'background' },
];

const layerElements = [
    { path: layer1, name: 'layer1' },
    { path: layer2, name: 'layer2' },
    { path: layer3, name: 'layer3' },
    { path: layer4, name: 'layer4' },
];

export interface BoardElement {
    path: string;
    name: string;
    valueId: number;
}

export interface BoardElementExtened {
    path: string;
    name: string;
    valueId: number;
    isSelected: boolean;
}

const boardElements: BoardElement[] = [
    { path: dirt1, name: 'dirt1', valueId: BLOCK.DIRT_LEFT },
    { path: dirt2, name: 'dirt2', valueId: BLOCK.DIRT_MIDDLE},
    { path: dirt3, name: 'dirt3', valueId: BLOCK.DIRT_RIGHT},
    { path: dirt4, name: 'dirt4', valueId: BLOCK.DIRT4},
    { path: dirt5, name: 'dirt5', valueId: BLOCK.DIRT5},
    { path: dirt6, name: 'dirt6', valueId: BLOCK.DIRT6},
    { path: dirt7, name: 'dirt7', valueId: BLOCK.DIRT7},
    { path: dirt8, name: 'dirt8', valueId: BLOCK.DIRT8},
    { path: dirt9, name: 'dirt9', valueId: BLOCK.DIRT9},
    { path: dirt10, name: 'dirt10', valueId: BLOCK.DIRT10},
    { path: dirt11, name: 'dirt11', valueId: BLOCK.DIRT11},
    { path: dirt12, name: 'dirt12', valueId: BLOCK.DIRT12},
    { path: dirt13, name: 'dirt13', valueId: BLOCK.DIRT13},
    { path: dirt14, name: 'dirt14', valueId: BLOCK.DIRT14},
    { path: dirt15, name: 'dirt15', valueId: BLOCK.DIRT15},
    { path: dirt16, name: 'dirt16', valueId: BLOCK.DIRT16},
    { path: dirt17, name: 'water1', valueId: BLOCK.WATER},
    { path: dirt18, name: 'water2', valueId: BLOCK.WATER2},
    { path: water, name: 'water3', valueId: BLOCK.WATER3},
    { path: wizzard, name: 'wizzard', valueId: BLOCK.TOM},
    { path: enemy, name: 'enemy', valueId: BLOCK.ENEMY},
    { path: hero, name: 'hero', valueId: BLOCK.PLAYER},
    { path: box, name: 'box', valueId: BLOCK.BOX},
    { path: star, name: 'star', valueId: BLOCK.STAR},
];

export { backgroundElement, layerElements, boardElements}
