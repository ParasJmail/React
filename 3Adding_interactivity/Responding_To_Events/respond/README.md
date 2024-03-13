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

Reading props in event handlers
Because event handlers are declared inside of a component, they have access to the component’s props. Here is a button that, when clicked, shows an alert with its message prop: Reading.js

    This lets these two buttons show different messages. Try changing the messages passed to them.

Passing event handlers as props
Often you’ll want the parent component to specify a child’s event handler. Consider buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.

    To do this, pass a prop the component receives from its parent as the event handler like so:

    Here, the Toolbar component renders a PlayButton and an UploadButton: PassAsProps.js

    PlayButton passes handlePlayClick as the onClick prop to the Button inside.
    UploadButton passes () => alert('Uploading!') as the onClick prop to the Button inside.

    Finally, your Button component accepts a prop called onClick. It passes that prop directly to the built-in browser <button> with onClick={onClick}. This tells React to call the passed function on click.

    If you use a design system, it’s common for components like buttons to contain styling but not specify behavior. Instead, components like PlayButton and UploadButton will pass event handlers down.

Naming event handler props

    Built-in components like <button> and <div> only support browser event names like onClick. However, when you’re building your own components, you can name their event handler props any way that you like.

    By convention, event handler props should start with on, followed by a capital letter.

    For example, the Button component’s onClick prop could have been called onSmash: NameEvntHandler.js

    In this example, <button onClick={onSmash}> shows that the browser <button> (lowercase) still needs a prop called onClick, but the prop name received by your custom Button component is up to you!

    When your component supports multiple interactions, you might name event handler props for app-specific concepts. For example, this Toolbar component receives onPlayMovie and onUploadImage event handlers: NameEvntHandler2.js

    Notice how the NamingNew component does not need to know what ToolbarNew will do with onPlayMovie or onUploadImage. That’s an implementation detail of the ToolbarNew. Here, ToolbarNew passes them down as onClick handlers to its Buttons, but it could later also trigger them on a keyboard shortcut. Naming props after app-specific interactions like onPlayMovie gives you the flexibility to change how they’re used later.

    Note

        Make sure that you use the appropriate HTML tags for your event handlers. For example, to handle clicks, use <button onClick={handleClick}> instead of <div onClick={handleClick}>. Using a real browser <button> enables built-in browser behaviors like keyboard navigation. If you don’t like the default browser styling of a button and want to make it look more like a link or a different UI element, you can achieve it with CSS.

Event propagation

    Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

    This <div> contains two buttons. Both the <div> and each button have their own onClick handlers. Which handlers do you think will fire when you click a button? : Evnt.js

    If you click on either button, its onClick will run first, followed by the parent <div>’s onClick. So two messages will appear. If you click the toolbar itself, only the parent <div>’s onClick will run.

    Pitfall

    All events propagate in React except onScroll, which only works on the JSX tag you attach it to.

Stopping propagation

    Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. You can use this object to read information about the event.

    That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() like this Button component does: stoppropagation.js

    When you click on a button:

        1. React calls the onClick handler passed to <button>.
        2. That handler, defined in Button, does the following:
            * Calls e.stopPropagation(), preventing the event from bubbling further.
            * Calls the onClick function, which is a prop passed from the Toolbar component.
        3. That function, defined in the Toolbar component, displays the    button’s own alert.
        4. Since the propagation was stopped, the parent <div>’s onClick handler does not run.

    As a result of e.stopPropagation(), clicking on the buttons now only shows a single alert (from the <button>) rather than the two of them (from the <button> and the parent toolbar <div>). Clicking a button is not the same thing as clicking the surrounding toolbar, so stopping the propagation makes sense for this UI.
