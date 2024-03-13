export default function PreventDefaultBehaviour(){
    return(
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting');
        }}>
            <h1>Preventing default behavior</h1>
            <input />
            <button>Send</button>
        </form>
    )
}