import Button from './Addingeventhandlers/eventHandler';
import './App.css';
import Naming from './Naming event handler props/NameEvntHandler';
import NamingNew from './Naming event handler props/NameEvntHandler2';
import PassToolBar from './Passing event handlers asprops/PassAsProps';
import Toolbar from './Readingpropsineventhandlers/Reading';

function App() {
  return (
    <>
    <Button />
    <Toolbar />
    <PassToolBar />
    <Naming />
    <NamingNew />
    </>
  );
}

export default App;
