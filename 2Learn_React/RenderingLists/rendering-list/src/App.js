import './App.css';
import List from './RenderingDataFromArrays/RenderingDataFromArrays';
import ListFilter from './FilteringArraysOfItems/Filteringarraysoftems';
import ListId from './Keepinglistitemsinorderwithkey/Keepinglistitemsinorderwithkey';

function App() {
  return (
    <div className="App">
      <section>
        <List />
        <ListFilter />
        <ListId />
      </section>
    </div>
  );
}

export default App;
