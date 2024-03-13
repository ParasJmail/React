function Button({onClick,children}){
    return(
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}

export default function ToolbarStopPropagate(){
    return(
        <div className="Toolbar Stop Click" onClick={() => {
            alert('You Click On Stop Prapagation ToolBar')
        }}>
            <h1>Stopping propagation</h1>
            <Button onClick={() => alert("Playing")}>Play Movie</Button>
            <Button onClick={() => alert("Uploading")}>Upload Movie</Button>
        </div>
    )
}