import { useContext } from 'react';
import Tile from './Tile';
import { EditorContext } from '../EditorContext'

interface Props {
    className: string;
}

const Editor = ({className}: Props) => {

    const editorContext = useContext(EditorContext);

    return (
        <div data-qa='Editor' className={className}>
            {editorContext?.boardMatrix.matrix.map((arr:number[], x:number) => arr.map((value: number, y:number)=> (
                <Tile x={x} y={y} key={`tile-${x}-${y}`}/>
            )))}
        </div>
    );
}

export default Editor;