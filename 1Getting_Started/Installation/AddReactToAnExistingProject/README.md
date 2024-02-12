//In this Project we learn how to convert a local project or a existing project to react project

Step 1: Run this command in your Project folder

    npm install react react-dom

    Then add these lines of code at the top of your main JavaScript file (it might be called index.js or main.js):


    import { createRoot } from 'react-dom/client';

    // Clear the existing HTML content
    document.body.innerHTML = '<div id="app"></div>';

    // Render your React component instead
    const root = createRoot(document.getElementById('app'));
    root.render(<h1>Hello, world</h1>);



Step 2: Render React components anywhere on the page 

    In the previous step, you put this code at the top of your main file:

    import { createRoot } from 'react-dom/client';

    // Clear the existing HTML content
    document.body.innerHTML = '<div id="app"></div>';

    // Render your React component instead
    const root = createRoot(document.getElementById('app'));
    root.render(<h1>Hello, world</h1>);

    Of course, you don’t actually want to clear the existing HTML content!

    Delete this code.

    Instead, you probably want to render your React components in specific places in your HTML. Open your HTML page (or the server templates that generate it) and add a unique id attribute to any tag, for example:

    <!-- ... somewhere in your html ... -->
    <nav id="navigation"></nav>
    <!-- ... more html ... -->
    This lets you find that HTML element with document.getElementById and pass it to createRoot so that you can render your own React component inside:


    Place this in your main JavaScript file (it might be called index.js or main.js):


        import { createRoot } from 'react-dom/client';

    function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <h1>Hello from React!</h1>;
    }

    const domNode = document.getElementById('navigation');
    const root = createRoot(domNode);
    root.render(<NavigationBar />);

    Now place this in your main HTML file

    <!DOCTYPE html>
    <html>
    <head><title>My app</title></head>
    <body>
        <p>This paragraph is a part of HTML.</p>
        <nav id="navigation"></nav>
        <p>This paragraph is also a part of HTML.</p>
    </body>
    </html>

    If the Code does not run then add this in package.json

    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }