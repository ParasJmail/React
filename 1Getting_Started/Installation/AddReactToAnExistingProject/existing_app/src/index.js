import {createRoot} from 'react-dom/client';

//Below comes when we run 'npm install react react-dom' command in an existing app.

    // //Clear existing html content
    // document.body.innerHTML = '<div id = "app"></div>';

    // //Render your component instead
    // const root = createRoot(document.getElementById('app'));
    // root.render(<h1>Hello World</h1>);

//Now replace this code with below
function NavigationBar(){
    //TODO: Actually  implement a navigation bar
    return <h1>Hello From Paras Through React</h1>;

}

const domNode = document.getElementById('navigation');

const root = createRoot(domNode);
root.render(<NavigationBar/>);