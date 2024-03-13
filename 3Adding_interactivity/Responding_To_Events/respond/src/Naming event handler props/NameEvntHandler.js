function Button({onSmash,children}){
    return(
        <button onClick = {onSmash}>
            {children}
        </button>
    );
}

export default function Naming(){
    return(
        <div>
            <h1>Naming event handler props </h1>
            <Button onSmash={() => alert("Playing")}>
                Play Movie
            </Button>
            <Button onSmash={() => alert("Uploading")}>
                Upload Movie
            </Button>
        </div>
    )
}
