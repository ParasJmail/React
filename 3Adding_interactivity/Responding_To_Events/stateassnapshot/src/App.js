import logo from './logo.svg';
import './App.css';
import Form from './Setting state triggers renders/trigger';
import Counter from './Rendering takes a snapshot in time/snap';
import CounterOverTime from './State over time/StateOverTime';
import CounterWithTime from './State over time/StateWithTime';

function App() {
  return (
    <div className="App">
      <Form />
      <Counter />
      <CounterOverTime />
      <CounterWithTime />
    </div>
  );
}

export default App;
