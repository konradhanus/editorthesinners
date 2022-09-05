import Drawer from "./components/Drawer";
import Editor from "./components/Editor";
import WrapperEditor from "./components/WrapperEditor";
import DrowerElement from "./components/Drawer/DrowerElement";

function App() {
    return (
        <WrapperEditor>
            <Drawer>
                <DrowerElement name="dirt1" />
                <DrowerElement name="dirt2" />
                <DrowerElement name="dirt3" />
                <DrowerElement name="dirt4" />
                <DrowerElement name="dirt5" />
                <DrowerElement name="dirt6" />
                <DrowerElement name="dirt7" />
                <DrowerElement name="dirt8" />
                <DrowerElement name="dirt9" />
                <DrowerElement name="dirt10" />
                <DrowerElement name="dirt11" />
                <DrowerElement name="dirt12" />
                <DrowerElement name="dirt13" />
                <DrowerElement name="dirt14" />
                <DrowerElement name="dirt15" />
                <DrowerElement name="dirt16" />
                <DrowerElement name="dirt17" />
                <DrowerElement name="dirt18" />
            </Drawer>
            <Editor>Editor</Editor>
        </WrapperEditor>
    );
}

export default App;
