import { useState } from "react";

export default function ReplaceStateAfterUpdating(){
    const [number,setNumber] = useState(0);

    return(
        <>
            <h1>replace state after updating it</h1>
            <h1>{number}</h1>
            <button onClick={() =>{
                setNumber(number + 5);
                setNumber(n => n + 1);
                setNumber(42);
            }}>IncreaseNumber</button>
        </>
    )
}