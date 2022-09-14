import { useContext } from 'react';
import Tile from './Tile';
import { EditorContext } from '../EditorContext'

interface Props {
    className: string;
}

const Editor = ({className}: Props) => {

    const editorContext = useContext(EditorContext);
    const updateTileByDimension = (x: number, y: number, value: number) => {
        const newEditorBoardMatrix = editorContext?.boardMatrix.matrix.map((arr) => {
            return arr.slice();
        });

        if (newEditorBoardMatrix !== undefined){
            newEditorBoardMatrix[x][y] = value;
            editorContext?.updateBoardMatrix({matrix: newEditorBoardMatrix});
        }
    }
    
    const editorTiles = editorContext?.boardMatrix.matrix.map((arr:number[], x:number) => 
        arr.map((value: number, y:number) => (
            <Tile 
                x={x} 
                y={y} 
                key={`tile-${x}-${y}`}
                value={value}
                updateTile={updateTileByDimension}
            />
        ))
    );

    return (
        <div data-qa='Editor' className={className}>{editorTiles}</div>
    );
}

export default Editor;