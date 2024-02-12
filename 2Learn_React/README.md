Describing the UI
React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.

In this chapter
    How to write your first React component
    When and how to create multi-component files
    How to add markup to JavaScript with JSX
    How to use curly braces with JSX to access JavaScript functionality from your components
    How to configure components with props
    How to conditionally render components
    How to render multiple components at a time
    How to avoid confusing bugs by keeping components pure
    Why understanding your UI as trees is useful


Your first component 
    React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. Here is a Gallery component rendering three Profile components:

Importing and exporting components 
    You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file:

Writing markup with JSX 
    Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

JavaScript in JSX with curly braces 
    JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to “open a window” to JavaScript:

Passing props to a component 
    React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX!

Conditional rendering 
    Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

Rendering lists
    You will often want to display multiple similar components from a collection of data. You can use JavaScript’s filter() and map() with React to filter and transform your array of data into an array of components.

    For each array item, you will need to specify a key. Usually, you will want to use an ID from the database as a key. Keys let React keep track of each item’s place in the list even if the list changes.

Keeping components pure 
    Some JavaScript functions are pure. A pure function:

    a. Minds its own business. It does not change any objects or variables that existed before it was called.
    b. Same inputs, same output. Given the same inputs, a pure function should always return the same result.
    
    By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows.