import { useState } from "react";

const initialList = [
    {id:0,title:'Title 1'},
    {id:1,title:'Title 2'},
    {id:2,title:'Title 3'},
]

export default function ReverseList(){
    const [list,setList] = useState(initialList);

    function handleClick(){
        const nexList = [...list];
        nexList.reverse();
        setList(nexList);
    }

    return(
        <>
            <h1>Making other changes to an array</h1>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>
                        {artwork.title}
                    </li>
                ))}
            </ul>
        </>
    )
}