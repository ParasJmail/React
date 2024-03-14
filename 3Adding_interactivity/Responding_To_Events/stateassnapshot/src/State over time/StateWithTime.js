import { useState } from "react";

export default function CounterWithTime(){
    const [number,setNumber] = useState(0);

    return(
        <>
            <h1>
            put a timer on the alert, so it only fires after the component re-rendered? Would it say “0” or “5”? Have a guess!
            </h1>
            <h1>{number}</h1>
            <button
                onClick={() =>{
                    setNumber(number + 5);
                    setTimeout(() => {
                        alert(number)
                    },3000);
                }}
            >+5</button>

        </>
    )
}