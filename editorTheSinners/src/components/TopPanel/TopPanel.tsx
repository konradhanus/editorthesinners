import { ComponentType } from "react";
import BoardGeneratorForm from "./BoardGeneratorForm";
import ResizeBoardForm from "./ResizeBoardForm";

interface TopPanelProps {
    className: string;
}

const TopPanel: ComponentType<TopPanelProps> = ({className}) => {
    return (
        <div data-qa="TopPanel" className={className}>
            <ResizeBoardForm />
            <BoardGeneratorForm />
        </div>
    );
};

export default TopPanel;
