import React from 'react';
import { boardElements, BoardElementExtened } from '../../assets';
import DrawerElement from '../Drawer/DrawerElement';
import ElementListWrapper from './ElementListWrapper';
export interface Props {
    className: string;
}

const Drawer = (props: Props) => {
    const [boxesStatus, setBoxesStatus] = React.useState<BoardElementExtened[]>(
        []
    );

    // component did mount
    React.useEffect(() => {
        const boardElementExtended: BoardElementExtened[] = boardElements.map(
            (singleBoardelement, id) => {
                return {
                    ...singleBoardelement,
                    isSelected: false,
                };
            }
        );

        setBoxesStatus(boardElementExtended);
    }, []);

    const setSelected = (id: number) => {
        const newBoxesStatus: BoardElementExtened[] = boxesStatus.map(
            (element, index) => {
                const isSelected = id === index ? element.isSelected : false;

                return { ...element, isSelected: isSelected };
            }
        );

        newBoxesStatus[id].isSelected = !newBoxesStatus[id].isSelected;
        setBoxesStatus(newBoxesStatus);
    };

    return (
        <div data-qa='Drawer' className={props.className}>
            <ElementListWrapper>
                {boxesStatus.map((singleBoardelement, id) => (
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
};

export default Drawer;
