import Button from './Addingeventhandlers/eventHandler';
import './App.css';
import ToolbarEvnt from './Event propagation/Evnt';
import Naming from './Naming event handler props/NameEvntHandler';
import NamingNew from './Naming event handler props/NameEvntHandler2';
import PassToolBar from './Passing event handlers asprops/PassAsProps';
import DefaultBehaviour from './Preventing default behavior/defaultBehaviour';
import PreventDefaultBehaviour from './Preventing default behavior/preventDefaultBehaviour';
import Toolbar from './Readingpropsineventhandlers/Reading';
import ToolbarStopPropagate from './Stopping propagation/stoppropagation';

function App() {
  return (
    <>
    <Button />
    <Toolbar />
    <PassToolBar />
    <Naming />
    <NamingNew />
    <ToolbarEvnt />
    <ToolbarStopPropagate />
    <DefaultBehaviour />
    <PreventDefaultBehaviour />
    </>
  );
}

export default App;
