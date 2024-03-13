import { sculptureList } from "./data.js";

export default function Gallery(){
    let index = 0;

    function handleClick(){
        index = index + 1;
        console.log(index)
    }

    let sculpture = sculptureList[index];

    return(
        <>  
            <h1>Using a Regular Varaible which isn't enough</h1>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img
                src = {sculpture.url}
                alt = {sculpture.alt}
            />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}
