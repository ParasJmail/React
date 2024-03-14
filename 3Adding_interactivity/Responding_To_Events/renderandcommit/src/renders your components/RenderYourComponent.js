import Gallery from "./Gallery";
import {createRoot} from 'react-dom/client';

export default function Render(){
    
const root = createRoot(document.getElementById('root'));
root.render(<Gallery />)
}