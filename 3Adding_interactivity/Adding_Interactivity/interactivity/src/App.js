
import './App.css';
import Respond from './RespondingToEvents/RespondingToEvents';
import State from './State/State';
import Form from './StateAsSnapshot/Snapshot';
import Counter from './Queueingaseriesofstateupdates/Queue';

function App() {
  return (
    <div className="App">
      <Respond />
      <State />
      <Form />
      <Counter />
    </div>
  );
}

export default App;
