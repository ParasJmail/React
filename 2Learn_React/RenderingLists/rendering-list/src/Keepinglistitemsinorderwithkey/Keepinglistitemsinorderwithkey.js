import getImageUrl from "../utils";
import { people } from "./data1";

export default function ListId(){
    const listItems = people.map(person => 
        <li key = {person.id}>
            
            <img
            src = {getImageUrl(person)}
            alt = {person.name}
            />
            <p>
                <b>{person.name}</b>
                {' '+ person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        
        )

    return (
       <ul>
            <h1>
                Keeping List Items In Order With Key
            </h1>
            {listItems}
       </ul>
        
    )
    
}