import logo from './logo.svg';
import './App.css';
import List from './Adding to an array/Add';
import ListCorrect from './Adding to an array/AddCorrect';
import RemoveList from './Removing from an array/Remove';
import ShapeEditor from './Transforming an array/Transform';
import CounterList from './Replacing items in an array/Replace';
import InserList from './Inserting into an array/Insert';

function App() {
  return (
    <div className="App">
      <List />
      <ListCorrect />
      <RemoveList />
      <ShapeEditor />
      <CounterList />
      <InserList />
    </div>
  );
}

export default App;
