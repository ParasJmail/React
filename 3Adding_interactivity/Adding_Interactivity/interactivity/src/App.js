
import './App.css';
import Respond from './RespondingToEvents/RespondingToEvents';
import State from './State/State';
import Form from './StateAsSnapshot/Snapshot';

function App() {
  return (
    <div className="App">
      <Respond />
      <State />
      <Form />
    </div>
  );
}

export default App;
