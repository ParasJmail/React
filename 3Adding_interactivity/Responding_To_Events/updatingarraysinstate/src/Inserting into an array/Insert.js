import { useState } from "react";

let nextId = 3;

const initialArtists = [
    {id:0,name:'Paras'},
    {id:1,name:'Paras Jaitly'},
    {id:2,name:'paras N Jaitly'},
];

export default function InserList(){
    const [name,setName] = useState('');
    const [artists,setArtists] = useState(
        initialArtists
    );

    function handleClick(){
        const insertAt = 1; //Could be any index
        const nextArtists = [
            //Items before the insertion point
            ...artists.slice(0,insertAt),
            //New Items
            {id:nextId++,name:name},
            //Items after insertion point
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return(
        <>
            <h1>Inserting into an array</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}
                    </li>
                    ))}
            </ul>
        </>
    );
}