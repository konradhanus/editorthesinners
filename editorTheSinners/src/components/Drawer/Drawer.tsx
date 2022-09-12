
import { useState, useContext, useEffect } from "react";
import { boardElements, BoardElementExtened } from "../../assets";
import DrawerElement from "../Drawer/DrawerElement";
import ElementListWrapper from './ElementListWrapper';
import { EditorContext } from './../EditorContext';
export interface Props {
    className: string
}

const Drawer = (props: Props) => {

    const [boxesStatus, setBoxesStatus] = useState<BoardElementExtened[]>([]);

    // component did mount
    useEffect(()=>{
        const boardElementExtended: BoardElementExtened[] = 
            boardElements.map((singleBoardelement, id) => ({
                ...singleBoardelement,
                isSelected: false
            }));

        setBoxesStatus(boardElementExtended)
    },[]);

    const setSelected = (id: number) => {

        const newBoxesStatus: BoardElementExtened[] = boxesStatus.map((element, id) => ({
            ...element,
            isSelected: false
        }));;

        newBoxesStatus[id].isSelected = !newBoxesStatus[id].isSelected
        setBoxesStatus(newBoxesStatus);
    }
    
    console.log('boxesStatus', boxesStatus);
    return(
        <div className={props.className}>
            <ElementListWrapper>
                {boxesStatus.map((singleBoardelement, id) =>  (
                    <DrawerElement 
                        id={id}
                        boardElement={singleBoardelement} 
                        key={`DrawerElement-${singleBoardelement.name}-${id}`} 
                        isSelected={singleBoardelement.isSelected}
                        setSelected={setSelected}
                        />
                ))}
            </ElementListWrapper>
        </div>
    );
}

export default Drawer;