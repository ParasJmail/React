import logo from './logo.svg';
import './App.css';
import List from './Adding to an array/Add';
import ListCorrect from './Adding to an array/AddCorrect';
import RemoveList from './Removing from an array/Remove';
import ShapeEditor from './Transforming an array/Transform';
import CounterList from './Replacing items in an array/Replace';
import InserList from './Inserting into an array/Insert';
import ReverseList from './Making other changes to an array/Reverse';
import BucketList from './Updating objects inside arrays/Update';
import BucketListCorrect from './Updating objects inside arrays/UpdateCorrect';
import ImmerList from './Write concise update logic with Immer/WithImmer';

function App() {
  return (
    <div className="App">
      <List />
      <ListCorrect />
      <RemoveList />
      <ShapeEditor />
      <CounterList />
      <InserList />
      <ReverseList />
      <BucketList />
      <BucketListCorrect />
      <ImmerList />
    </div>
  );
}

export default App;
