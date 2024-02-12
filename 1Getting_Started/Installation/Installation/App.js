Installation
// React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.

// In this chapter
    // How to start a new React project
    // How to add React to an existing project
    // How to set up your editor
    // How to install React Developer Tools

function Greeting({name}){
    return <h1>Hello,{name}</h1>;
}

export default function App(){
    return <Greeting name = "World" />
}

