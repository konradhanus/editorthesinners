import { ComponentType } from 'react';
import styled from 'styled-components';
import Tile, { translateValueIdToImage } from './Tile';

export interface Props {
    x: number;
    y: number;
    value: number;
    updateTile: (x: number, y: number, value: number) => void;
}

const TileStyle: ComponentType<Props> = styled(Tile)`
    position: absolute;
    box-sizing: border-box;
    top: ${props => props.y*110}px;
    left: ${props => props.x*110}px;
    width: 110px;
    height: 110px;
    background-color: transparent;
    border: 1px solid black;
    background-image: url(${props => translateValueIdToImage(props.value)});
    background-size: cover;
`;

export default TileStyle;