import Drawer from "../Drawer";
import Editor from "../Editor";
import TopPanel from "../TopPanel";
import ElementProvider from "../EditorContext";

export interface Props {
    className: string;
}

const WrapperEditor = ({ className }: Props) => {
    return (
        <div data-qa="WrapperEditor" className={className}>
            <ElementProvider>
                <TopPanel />
                <Drawer />
                <Editor />
            </ElementProvider>
        </div>
    );
};

export default WrapperEditor;
