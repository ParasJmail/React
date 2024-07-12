import React, { useState } from 'react'

const Hotel = () => {
    const [text,setText] = useState('');
    const [isSending,setIsSending] = useState(false);
    const [isSent,setisSent] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text)
        setIsSending(false);
        setisSent(true);
    }

    if(isSent){
        return <h1>Thanks for feedback</h1>
    }

  return (
    <form onSubmit={handleSubmit}>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea disabled={isSending} value={text} onChange={e => setText(e.target.value)} />
        <br />
        <button disabled={isSending} type='submit'>
            Send
        </button>

        {isSending && <p>Sending...</p>}

    </form>
  )
}

function sendMessage(text){
    return new Promise(resolve => {
        setTimeout(resolve,2000)
    })
}

export default Hotel
