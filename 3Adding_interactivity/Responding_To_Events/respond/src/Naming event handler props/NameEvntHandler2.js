export default function NamingNew(){
    return(
       <>
            <h1>name event handler props for app-specific concepts</h1>
            <ToolbarNew 
                onPlayMovie = {() => alert("Playing")}
                onUploadMovie = {() => alert("Uploading")}
            />
        </>

    );
}

function ToolbarNew({onPlayMovie,onUploadMovie}){
    return(
        <div>
            <Button onClick = {onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick = {onUploadMovie}>
                Upload Movie
            </Button>
        </div>
    )
}

function Button({onClick,children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}