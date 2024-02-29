import {useState} from 'react';

export default function Counter(){
    const [score,setScore] = useState(0);

    function increment() {
        setScore(s => s + 1);
    }

    return(
        <>  
        <h1>Queueing a series of state updates </h1>
            <button onClick={()=> increment()}>
            +1
            </button>
            <button onClick={()=>{
                increment();
                increment();
                increment();
            }}>+3</button>

            <h1>Score : {score}</h1>


        </>
    )
}