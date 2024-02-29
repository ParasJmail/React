
import './App.css';
import Respond from './RespondingToEvents/RespondingToEvents';
import State from './State/State';
import Form from './StateAsSnapshot/Snapshot';
import Counter from './Queueingaseriesofstateupdates/Queue';
import UpdateForm from './Updatingobjectsinstate/Update';
import ImmerForm from './Updatingobjectsinstate/ImmerUpdate';
import BucketList from './Updatingarraysinstate/UpdateArray';


function App() {
  return (
    <div className="App">
      <Respond />
      <State />
      <Form />
      <Counter />
      <UpdateForm />
      <ImmerForm />
      <BucketList />
    </div>
  );
}

export default App;
