import { useState } from "react";

export default function CounterOverTime(){
    const [number,setNumber] = useState(0);

    return(
        <>  
            <h1>State over time </h1>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                alert(number);
            }}>+5</button>
        </>
    )
}