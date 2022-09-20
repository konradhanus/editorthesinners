import { Counter } from '../../containers/Counter';
import WrapperEditor from '../WrapperEditor';

interface Props {
    className: string
}

const App = ({className}: Props) => (
    <div data-qa= "App" className={className}>
        <WrapperEditor />
        <Counter />
    </div>
);

export default App;