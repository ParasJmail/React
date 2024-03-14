import logo from './logo.svg';
import './App.css';
import Form from './Setting state triggers renders/trigger';
import Counter from './Rendering takes a snapshot in time/snap';
import CounterOverTime from './State over time/StateOverTime';
import CounterWithTime from './State over time/StateWithTime';
import FormOptions from './State over time/StateOptions';

function App() {
  return (
    <div className="App">
      <Form />
      <Counter />
      <CounterOverTime />
      <CounterWithTime />
      <FormOptions />
    </div>
  );
}

export default App;
