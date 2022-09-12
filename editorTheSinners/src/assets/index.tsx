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
import { string } from "prop-types";

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
}

export interface BoardElementExtened {
    path: string;
    name: string;
    isSelected: boolean;
}

const boardElements: BoardElement[] = [
    { path: dirt1, name: 'dirt1' },
    { path: dirt2, name: 'dirt2' },
    { path: dirt3, name: 'dirt3' },
    { path: dirt4, name: 'dirt4' },
    { path: dirt5, name: 'dirt5' },
    { path: dirt6, name: 'dirt6' },
    { path: dirt7, name: 'dirt7' },
    { path: dirt8, name: 'dirt8' },
    { path: dirt9, name: 'dirt9' },
    { path: dirt10, name: 'dirt10' },
    { path: dirt11, name: 'dirt11' },
    { path: dirt12, name: 'dirt12' },
    { path: dirt13, name: 'dirt13' },
    { path: dirt14, name: 'dirt14' },
    { path: dirt15, name: 'dirt15' },
    { path: dirt16, name: 'dirt16' },
    { path: dirt17, name: 'water1' },
    { path: dirt18, name: 'water2' },
    { path: water, name: 'water3' },
    { path: wizzard, name: 'wizzard' },
    { path: enemy, name: 'enemy' },
    { path: hero, name: 'hero' },
    { path: box, name: 'box' }
];

export { backgroundElement, layerElements, boardElements}
