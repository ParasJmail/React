export default function ToolbarEvnt(){
    return(
        <div className="ToolbarEvnt" onClick={() =>{
            alert('You click on Toolbar Event Propagation')
        }}>
            <h1>Event propagation</h1>
            <button onClick={() => alert('Playing')}>
                Play Button
            </button>
            <button onClick={() => alert('Uploading')}>
                Upload Button
            </button>
        </div>
    )
}