import Drawer from "./components/Drawer";
import Editor from "./components/Editor";
import WrapperEditor from "./components/WrapperEditor";

function App() {
  return (
    <WrapperEditor >
      <Drawer>
        <img src="./" />
      </Drawer>
      <Editor>Editor</Editor>
    </WrapperEditor>
  );
}

export default App;
