import logo from './logo.svg';
import './App.css';
import Counter from './Updating the same state multiple times before the next render/UpdateMultiple';
import UpdateStateAfterReplacing from './What happens if you update state after replacing it/UpdateStateAfterReplacing';

function App() {
  return (
    <div className="App">
      <Counter />
      <UpdateStateAfterReplacing />
    </div>
  );
}

export default App;
