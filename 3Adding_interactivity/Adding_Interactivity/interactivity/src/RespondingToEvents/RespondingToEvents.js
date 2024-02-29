export default function Respond(){
    return (
        <Toolbar 
        onPlayMovie={()=>alert('Playing')}
        onUploadImage={()=>alert('Uploading')}
        Paras={()=>alert('Paras responding')}
        />
    );
}

function Toolbar({onPlayMovie,onUploadImage,Paras}){
    return(
        <div>
            <h1>Responding To Events</h1>
            <Button onClick = {onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick = {onUploadImage}>
                Upload Image
            </Button>
            <Button onClick={Paras}>
                Paras Own Response
            </Button>
        </div>
    );
}

function Button({onClick,children}){
    return(
        
        <button onClick={onClick}>
            {children}
        </button>
        
        
    )
        
}