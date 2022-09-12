import Input from "../Form/Input";
import { ComponentType } from "react";

interface TopPanelProps {
    className: string;
}

const TopPanel: ComponentType<TopPanelProps> = ({ className }) => {
    return (
        <div data-qa="TopPanel" className={className}>
            <Input defaultValue="test_1" type="text" value="test" />
        </div>
    );
};

export default TopPanel;
