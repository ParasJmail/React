import { useState } from "react";

let initialArtists = [
    {id:0,name:'Paras'},
    {id:1,name:'Paras Jaitly'},
    {id:2,name:'Paras N Jaitly'},
];

export default function RemoveList(){
    const [artists,setArtists] = useState(initialArtists);

    return(
        <>
            <h1>Removing from an array</h1>
            <h1>Inspiring sculpture</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(artists.filter(a =>
                                a.id !== artist.id
                                ));
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}