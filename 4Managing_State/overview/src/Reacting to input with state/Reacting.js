import {useState} from 'react';

export default function Form(){
    const [answer,setAnswer] = useState('');
    const [error,setError] = useState(null);
    const [status,setStatus] = useState('typing');

    if(status === 'success'){
        return <h1>That's right</h1>
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        }catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }

    return(
        <>
            <h1>Reacting to input with state</h1>
            
            <h2>City Quiz</h2>

            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>

            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submiting'}
                />

                <br/>

                <button disabled = {
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>

                {error !== null &&
                    <p className='Error'>
                        {error.message}
                    </p>
                }
            </form>

        </>
    );


}

function submitForm(answer){
    //Pretend its hitting the network
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let shouldError = answer.toLowerCase() !== 'lima'
            if(shouldError){
                reject(new Error('Good Guess But a wrong answer. Try again!'))
            }else{
                resolve();
            }
        },1500);
    });
}

