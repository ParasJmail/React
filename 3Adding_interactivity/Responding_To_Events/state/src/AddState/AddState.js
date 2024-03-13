import { sculptureList } from "./data";
import { useState } from "react";

export default function StateGallery(){

    const [index,setIndex] = useState(0);

     function handleClick(){
        setIndex(index + 1);
     }

     let sculpture = sculptureList[index];

     return(
        <div>
            <h1>Using State</h1>
            <button onClick={handleClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>

            <h3>({index + 1} by {sculptureList.length})</h3>

            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            
        </div>
     )

}