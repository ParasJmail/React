import logo from './logo.svg';
import './App.css';
import List from './Adding to an array/Add';
import ListCorrect from './Adding to an array/AddCorrect';
import RemoveList from './Removing from an array/Remove';

function App() {
  return (
    <div className="App">
      <List />
      <ListCorrect />
      <RemoveList />
    </div>
  );
}

export default App;
