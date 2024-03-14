import logo from './logo.svg';
import './App.css';
import Initial from './Initial Render/InitialRender';
import Render from './renders your components/RenderYourComponent';
import Main from './commits changes to the DOM/main';


function App() {
  return (
    <div className="App">
      <div><Initial /></div>
      <div><Render /></div>
      <div><Main /></div>
    </div>
  );
}

export default App;
