function Button({onClick,children}){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`Playing ${movieName}!`);
    }

    return(
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton(){
    return(
        <Button onClick={()=>{alert('Uploading')}}>
            Upload Image
        </Button>
    );
}

function AddMovie(){
    return(
        <Button onClick={()=>{alert('Add Movie')}}>
            Movie Added
        </Button>
    )
}

function AddMovieName({movieName}){
    function handleMovieName(){
        alert(`${movieName} Added`);
    }

    return(
        <Button onClick={handleMovieName}>
            Add Movie Name
        </Button>
    )
}

export default function PassToolBar(){
    return(
        <div>
            <h1>Passing event handlers as props </h1>
            <PlayButton movieName='Paras Movie' />
            <UploadButton />
            <AddMovie />
            <AddMovieName movieName='New Paras Movie' />
        </div>
    )
}