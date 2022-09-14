import dirt1 from "./dirt1.png";
import dirt2 from "./dirt2.png";
import dirt3 from "./dirt3.png";
import dirt4 from "./4.png";
import dirt5 from "./5.png";
import dirt6 from "./6.png";
import dirt7 from "./7.png";
import dirt8 from "./8.png";
import dirt9 from "./9.png";
import dirt10 from "./10.png";
import dirt11 from "./11.png";
import dirt12 from "./12.png";
import dirt13 from "./13.png";
import dirt14 from "./14.png";
import dirt15 from "./15.png";
import dirt16 from "./16.png";
import dirt17 from "./17.png";
import dirt18 from "./18.png";
import background from "./background.png";
import layer1 from "./bg_layer1.png";
import layer2 from "./bg_layer2.png";
import layer3 from "./bg_layer3.png";
import layer4 from "./bg_layer4.png";
import enemy from "./enemy.png";
import wizzard from "./tom.png";
import water from "./water.png";
import box from "./box.png";
import hero from "./hero.png";
import star from "./star.png";
import {BLOCK} from "../levels/type";

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
