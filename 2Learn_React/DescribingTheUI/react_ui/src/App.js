// import logo from './logo.svg';
import './App.css';
import Galery from './Galery.js';
import {getImageUrl} from './utils.js'
import { people } from './data.js';
import { getImageUrlRenderingList } from './utils.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



//Your First Component
function Profile(){
  return(
    <img 
      src='https://media.licdn.com/dms/image/D4D03AQF2DeyAafctkw/profile-displayphoto-shrink_400_400/0/1688924729379?e=1712793600&v=beta&t=RtZ1k6LCEF2oQ9DDBR99ArVrZ4sXcmDjV8NdEPKHUb0'
      alt='Paras Jaitly'
    />
  );
}

export default function Gallery(){
  return(
    <section>
      <h1>
        Amazing Coder
      </h1>
      <Profile />
      
      <Galery />
    </section>

    
  );
}

//Importing and exporting components 
export function Impoexpo(){
  return(
    <Galery />
  )
}

// Writing markup with JSX 
export function TodoList(){
  return(
    <>
     <h1>
      Paras Jaitly Todo
    </h1>

    <img 
    src='https://media.licdn.com/dms/image/D4D03AQF2DeyAafctkw/profile-displayphoto-shrink_400_400/0/1688924729379?e=1712793600&v=beta&t=RtZ1k6LCEF2oQ9DDBR99ArVrZ4sXcmDjV8NdEPKHUb0'
    alt='Paras Jaitly'
    />

    <ul>
      <li>Task1</li>
      <li>Task2</li>
      <li>Task3</li>
    </ul>
    </>
  )
}

//JavaScript in JSX with curly braces
const person = {
  name:'Paras Jaitly',
  theme: {
    backgroundColor:'black',
    color:'grey'
  }
};

export function TodoListt(){
  return(
    <div style={person.theme}>
      <h1>
        {person.name}'s Todos
      </h1>
      <img 
        src='https://media.licdn.com/dms/image/D4D03AQF2DeyAafctkw/profile-displayphoto-shrink_400_400/0/1688924729379?e=1712793600&v=beta&t=RtZ1k6LCEF2oQ9DDBR99ArVrZ4sXcmDjV8NdEPKHUb0'
        alt='Paras Jaitly'
      />
      <ul>
        <li>Task1</li>
        <li>Task2</li>
        <li>Task3</li>
      </ul>
    </div>
  )
}

//Passing props to a component
export function Prof() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Paras Jaitly',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  );
}

// Conditional rendering
function Item({name,isPacked}){
  return (
    <li className='item'>
      {name} {isPacked && '✔'}
    </li>
  );
}

export function PackingList(){
  return (
    <section>
      <h1>
        Paras Jaitly Packing List
      </h1>
      <ul>
        <Item
          isPacked={true}
          name="Bag"
        />
        <Item
          isPacked={true}
          name="Helmet"
        />
        <Item
          isPacked={false}
          name="Bottle"
        />
      </ul>
    </section>
  )
}

//Rendering lists
export function List(){
  const listItems = people.map(person=>
    <li key={person.id}>
      <img 
        src={getImageUrlRenderingList(person)}
        alt={person.name}
      />
      <p>
        <b>
          {person.name}:
        </b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
    );

    return(
      <article>
        <h1>Person</h1>
        <ul>{listItems}</ul>
      </article>
    )
}

// export default App;
