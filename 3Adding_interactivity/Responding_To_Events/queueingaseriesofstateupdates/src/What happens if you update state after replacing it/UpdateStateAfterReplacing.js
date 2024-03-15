import { useState } from "react";

export default function UpdateStateAfterReplacing(){

    const [number,setNumber] = useState(0);

    return(
        <>  
            <h1>update state after replacing it</h1>
            <h1>{number}</h1>
            <button onClick={() =>{
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>Increase Number</button>
        </>
    )
}