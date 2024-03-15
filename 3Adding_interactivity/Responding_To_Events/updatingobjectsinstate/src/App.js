
import Form from './Copying objects with the spread syntax/CopyObjects.js';
import ObjectSpread from './Copying objects with the spread syntax/ObjectSpread.js';
import MovingDot from './Treat state as read-only/TreatState';
import TreatStateCorrect from './Treat state as read-only/TreatStateCorrect.js';
import Nested from './Updating a nested object/nested.js';

function App() {
  return (
    <div className="App">
      <MovingDot />
      <TreatStateCorrect />
      <Form />
      <ObjectSpread />
      <Nested />
    </div>
  );
}

export default App;
