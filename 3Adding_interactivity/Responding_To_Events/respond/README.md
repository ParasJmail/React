Responding to Events
    React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

You will learn
    Different ways to write an event handler
    How to pass event handling logic from a parent component
    How events propagate and how to stop them

Adding event handlers 
    To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example, here is a button that doesn’t do anything yet:

    export default function Button() {
        return (
            <button>
                I don't do anything
            </button>
        );
    }

    You can make it show a message when a user clicks by following these three steps:

    1.Declare a function called handleClick inside your Button component.
    2.Implement the logic inside that function (use alert to show the message).
    3.Add onClick={handleClick} to the <button> JSX.

    eventHandler.js

    You defined the handleClick function and then passed it as a prop to <button>.  handleClick is an event handler. Event handler functions:

    
    *Are usually defined inside your components.
    *Have names that start with handle, followed by the name of the event.


    By convention, it is common to name event handlers as handle followed by the event name. You’ll often see onClick={handleClick}, onMouseEnter={handleMouseEnter}, and so on.

    Alternatively, you can define an event handler inline in the JSX:

    <button onClick={function handleClick() {
        alert('You clicked me!');
    }}>

    Or, more concisely, using an arrow function:

    <button onClick={() => {
        alert('You clicked me!');
    }}>

    All of these styles are equivalent. Inline event handlers are convenient for short functions.