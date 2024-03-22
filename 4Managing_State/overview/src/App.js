import logo from './logo.svg';
import './App.css';
import Form from './Reacting to input with state/Reacting';
import Choosing from './Choosing the state structure/Choosing';
import Choosing2 from './Choosing the state structure/Choosing2';
import Sharing from './Sharing state between components/Sharing';
import Preserve from './Preserving and resetting state/preserve';
import PreserveCorrect from './Preserving and resetting state/PreserveCorrect';

function App() {
  return (
    <div className="App">
      <Form />
      <Choosing />
      <Choosing2 />
      <Sharing />
      <Preserve />
      <PreserveCorrect />
    </div>
  );
}

export default App;
