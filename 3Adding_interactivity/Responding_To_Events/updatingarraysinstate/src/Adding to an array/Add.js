import { useState } from "react";

let nextId = 0

export default function List(){
    const [name,setName] = useState('');
    const [artists,setArtists] = useState([]);

    return(
        <>  
            <h1>Adding to an array</h1>
            <h1>Inspiring sculpture:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                artists.push({
                    id:nextId++,
                    name:name,
                });
            }}>Add</button>
            <ul>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>
                ))}
            </ul>
        </>
    )
}