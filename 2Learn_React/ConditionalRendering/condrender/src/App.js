
import './App.css';
import PackingListAssignToVariable from './ConditionallyAssigningJSXtoVariable/CondrAssignToVariable';
import PackingList from './condr/Condr';
import PackingListLogicalAnd from './condrlogicaland/CondrLogicalAnd';
import PackingWithoutDuplication from './condrwithoutduplication/CondrWithoutDuplication';

function App() {
  return (
    <div className="App">
      <PackingList />
      <PackingWithoutDuplication />
      <PackingListLogicalAnd />
      <PackingListAssignToVariable />
    </div>
  );
}

export default App;
