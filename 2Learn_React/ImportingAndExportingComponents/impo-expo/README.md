Importing and Exporting Components
    The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.

You will learn
    What a root component file is
    How to import and export a component
    When to use default and named imports and exports
    How to import and export multiple components from one file
    How to split components into multiple files

The root component file 
    In Your First Component, you made a Profile component and a Gallery component that renders it:


    These currently live in a root component file, named App.js in this example. Depending on your setup, your root component could be in another file, though. If you use a framework with file-based routing, such as Next.js, your root component will be different for every page.

Exporting and importing a component 
    What if you want to change the landing screen in the future and put a list of science books there? Or place all the profiles somewhere else? It makes sense to move Gallery and Profile out of the root component file. This will make them more modular and reusable in other files.
    
    You can move a component in three steps:

    1. Make a new JS file to put the components in.
    2. Export your function component from that file (using either default or named exports).
    3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).
    
    Here both Profile and Gallery have been moved out of App.js into a new file called Gallery.js. Now you can change App.js to import Gallery from Gallery.js:


Exporting and importing multiple components from the same file 
    What if you want to show just one Profile instead of a gallery? You can export the Profile component, too. But Gallery.js already has a default export, and you can’t have two default exports. You could create a new file with a default export, or you could add a named export for Profile. A file can only have one default export, but it can have numerous named exports!