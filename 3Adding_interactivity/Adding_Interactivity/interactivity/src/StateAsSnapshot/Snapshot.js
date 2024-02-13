import { useState } from "react";
import './Snapshot.css'

export default function Form(){
    const [to,setTo] = useState('Alice');
    const [message , setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        },5000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>State As A Snapshot</h1>
            <label>
                To:{' '}
                <select
                value={to}
                onChange={e=> setTo(e.target.value)}>
                    <option value='Alice'>Alice</option>
                    <option value='Bob'>Bob</option>
                </select>

            </label>

            <textarea
                placeholder="Message"
                value={message}
                onChange={e=>setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}