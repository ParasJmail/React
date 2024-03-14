import Image from "./images";
import {createRoot} from 'react-dom/client';

export default function Initial(){
    const root = createRoot(document.getElementById('root'))
    root.render(<Image />);
}