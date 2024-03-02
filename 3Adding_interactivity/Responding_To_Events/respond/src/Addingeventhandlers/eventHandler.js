export default function Button(){
    function handleClick(){
        alert('You clicked me.');
    }

    return(
        <>
        <h1>Adding event handlers</h1>
        <button onClick={handleClick}>
            Click Me
        </button>
        </>
    );
}