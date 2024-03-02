function AlertButton({messsage,children}){
    return (
        <button onClick={() => alert(messsage)}>
            {children}
        </button>
    );
}

export default function Toolbar(){
    
}