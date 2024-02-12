Your First Component

    Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!

You will learn
    What a component is
    What role components play in a React application
    How to write your first React component

Defining a component 
    Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps. React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup.

    And here’s how to build a component:

    Step 1: Export the component 
        The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files. (More on importing in Importing and Exporting Components!)

    Step 2: Define the function 
        With function Profile() { } you define a JavaScript function with the name Profile.


        !!!Note!!!
            React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

    Step 3: Add markup 
        The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.

Using a component 
    Now that you’ve defined your Profile component, you can nest it inside other components. For example, you can export a Gallery component that uses multiple Profile components:

    What the browser sees 
        Notice the difference in casing:

        <section> is lowercase, so React knows we refer to an HTML tag.
        <Profile /> starts with a capital P, so React knows that we want to use our component called Profile.