import { useState } from "react";

export default function FormOptions(){
    const [to,setTO]  = useState('Paras');
    const [message,setMessage] = useState("Hello");

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You send ${message} to ${to}`);
        },5000);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                To: {' '}
                <select 
                    value={to}
                    onChange={e => setTO(e.target.value)}>
                        <option value='Paras'>Paras</option>
                        <option value='Bob'>Bob</option>
                </select>
            </label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e =>setMessage(e.target.value)}
            />
            <button type="submit">send</button>
        </form>
    )
}