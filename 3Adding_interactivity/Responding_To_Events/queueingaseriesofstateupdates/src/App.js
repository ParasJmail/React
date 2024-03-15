import logo from './logo.svg';
import './App.css';
import Counter from './Updating the same state multiple times before the next render/UpdateMultiple';
import UpdateStateAfterReplacing from './What happens if you update state after replacing it/UpdateStateAfterReplacing';
import ReplaceStateAfterUpdating from './What happens if you replace state after updating it/ReplaceStateAfterUpdating';

function App() {
  return (
    <div className="App">
      <Counter />
      <UpdateStateAfterReplacing />
      <ReplaceStateAfterUpdating />
    </div>
  );
}

export default App;
