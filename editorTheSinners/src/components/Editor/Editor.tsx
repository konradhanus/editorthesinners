import Tile from './Tile';

interface Props {
    className: string;
}

const Editor = ({className}: Props) => (
    <div data-qa='Editor' className={className}>
        {[
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
            [0,1,2,3,4,5,6],
        ].map((arr:number[], x:number) => arr.map((y:number)=> (
            <Tile x={x} y={y} key={`${x}-${y}`}/>
        )))}
    </div>
);

export default Editor;