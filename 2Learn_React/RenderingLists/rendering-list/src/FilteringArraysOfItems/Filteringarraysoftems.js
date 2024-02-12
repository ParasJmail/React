import { people } from "./data";
import getImageUrl from "../utils";

export default function ListFilter(){
    const chemist = people.filter(person =>
        person.profession === 'chemist'
        )

    const listItems = chemist.map(person => 
        <li>
            <img 
                src = {getImageUrl(person)}
                alt = {person.name}
            />
            <p>
                <b>person.name</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        )

        return (
            <>
            <h1>Filtering Arrays of Items</h1>
            {listItems}
            </>
        )
}

//Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:

// const listItems = chemists.map(person =>
//     <li>...</li> // Implicit return!
//   );

// However, you must write return explicitly if your => is followed by a { curly brace!

//     const listItems = chemists.map(person => { // Curly brace
//       return <li>...</li>;
//     });
//     Arrow functions containing => { are said to have a “block body”. They let you write more than a single line of code, but you have to write a return statement yourself. If you forget it, nothing gets returned!