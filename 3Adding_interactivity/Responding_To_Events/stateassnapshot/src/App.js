import logo from './logo.svg';
import './App.css';
import Form from './Setting state triggers renders/trigger';
import Counter from './Rendering takes a snapshot in time/snap';
import CounterOverTime from './State over time/StateOverTime';

function App() {
  return (
    <div className="App">
      <Form />
      <Counter />
      <CounterOverTime />
    </div>
  );
}

export default App;
