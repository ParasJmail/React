import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

let initialShapes = [
    {id:0,type:'circle',x:50,y:100},
    {id:1,type:'square',x:150,y:100},
    {id:2,type:'circle',x:250,y:100},
]

export default function ShapeEditor(){
    const [shapes,setShape] = useState(
        initialShapes
    )

    function handleClick(){
        const nextShape = shapes.map(shape =>{
            if(shape.type === 'square'){
                //No Change
                return shape;
            }else{
                return {
                    //Return a new circle 50px below
                    ...shape,
                    y:shape.y + 50,
                };
            }
        });
        setShape(nextShape);
    }

    return(
        <>
            <h1>Transforming an array</h1>
            <button onClick={handleClick}>
                Move Circle Down
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background:'purple',
                        position:'absolute',
                        left:shape.x,
                        top:shape.y,
                        borderRadius:shape.type === 'circle'
                            ? '50%' : '',
                        width:20,
                        height:20
                    }} />
            ))}
        </>
    )
}   