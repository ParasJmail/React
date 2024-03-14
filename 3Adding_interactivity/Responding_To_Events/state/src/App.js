import logo from './logo.svg';
import './App.css';
import Gallery from './Regular/Regular';
import StateGallery from './AddState/AddState';
import MultipleComponentGallery from './Giving a component multiple state variables/MultipleComponent';
import Isolate from './State is isolated and private/Isolate';

function App() {
  return (
    <div className="App">
      <Gallery />
      <StateGallery />
      <MultipleComponentGallery />
      <Isolate />
    </div>
  );
}

export default App;
