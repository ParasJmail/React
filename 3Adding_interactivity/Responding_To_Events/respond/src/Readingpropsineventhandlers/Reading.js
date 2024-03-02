function AlertButton({messsage,children}){
    return (
        <button onClick={() => alert(messsage)}>
            {children}
        </button>
    );
}

export default function Toolbar(){
    return(
        <div>
            <h1>Reading props in event handlers</h1>
            <AlertButton messsage='Playing'>
                Play Movie
            </AlertButton>
            <AlertButton messsage='Uploading'>
                Upload Image
            </AlertButton>
        </div>
    )
}