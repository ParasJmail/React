export default function DefaultBehaviour(){
    return(
        <form onSubmit={() => alert('Submitting')}>
            <h1>default behavior</h1>
            
            <input />
            <button>Send</button>
        </form>
    )
}