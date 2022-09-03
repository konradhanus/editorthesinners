import Drawer from "./components/Drawer";
import Editor from "./components/Editor";
import WrapperEditor from "./components/WrapperEditor";
import { dirt1 } from "./assets/index";

function App() {
    return (
        <WrapperEditor>
            <Drawer>
                <img src={dirt1} alt="dirt1" />
            </Drawer>
            <Editor>Editor</Editor>
        </WrapperEditor>
    );
}

export default App;
