import { useState,useEffect } from "react";
import Clock from "./clock.js";

function useTime(){
    const [ time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() =>{
            setTime(new Date());
        },1000);
        return () => clearInterval(id);
    },[]);
    return time;
}

export default function Main(){
    const time = useTime();
    return(
        <Clock time = {time.toLocaleTimeString()} />
    );
}