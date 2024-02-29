import {useState} from 'react';
import {useImmer} from 'use-immer';

const initialList = [
    {id:0, title:'Paras Jaitly', seen:false},
    {id:1, title:'Paras', seen:false},
    {id:2, title:'Paras N Jaitly', seen:true},
];

export default function BucketListImmer(){
    const [list,updateList] = useImmer(initialList);

    function handleToggle(artworkId,nextSeen){
        updateList(draft=>{
            const artwork = draft.find(a=>
                a.id === artworkId
                );
            artwork.seen = nextSeen;
        });
    }

    return(
        <>  
            <h1>Updating arrays in state : Use a library like Immer to reduce repetitive code</h1>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see</h2>
            <ItemList
            artwork={list}
            onToggle={handleToggle}
            />
        </>
    );
}

function ItemList({artwork,onToggle}){
    return(
        <ul>
            {artwork.map(artwork=>(
                <li key={artwork.id}>
                    <label>
                        <input
                            type='checkbox'
                            checked={artwork.seen}
                            onChange={e=>{
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                    </label>
                </li>
            ))}
        </ul>
    )
}