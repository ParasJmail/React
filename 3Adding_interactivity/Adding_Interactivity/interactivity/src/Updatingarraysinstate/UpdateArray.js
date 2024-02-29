import {useState} from 'react';

const initialList = [
    {id:0, title: 'Paras Jaitly', seen: false},
    {id:1, title: 'Paras', seen: false},
    {id:2, title: 'Jaitly', seen: true},
];

export default function BucketList(){
    const [list,setList] = useState(
        initialList
    );

    function handleToggle(artworkId,nextSeen){
        setList(list.map(artwork=>{
            if(artwork.id === artworkId){
                return {...artwork,seen:nextSeen};
            }else{
                return artwork;
            }
        }));
    }

    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My List of art to see</h2>
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
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}