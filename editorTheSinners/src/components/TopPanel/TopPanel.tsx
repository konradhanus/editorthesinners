import { ComponentType } from "react";
import ResizeBoardForm from "./ResizeBoardForm";

interface TopPanelProps {
    className: string;
}

const TopPanel: ComponentType<TopPanelProps> = ({ className }) => {
    return (
        <div data-qa="TopPanel" className={className}>
            <ResizeBoardForm />
        </div>
    );
};

export default TopPanel;
