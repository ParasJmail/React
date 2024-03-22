import logo from './logo.svg';
import './App.css';
import Form from './Reacting to input with state/Reacting';
import Choosing from './Choosing the state structure/Choosing';
import Choosing2 from './Choosing the state structure/Choosing2';
import Sharing from './Sharing state between components/Sharing';
import Preserve from './Preserving and resetting state/preserve';

function App() {
  return (
    <div className="App">
      <Form />
      <Choosing />
      <Choosing2 />
      <Sharing />
      <Preserve />
    </div>
  );
}

export default App;
