import { useState } from "react";

export default function TreatStateCorrect(){
    const [position,setPosition] = useState({
        x:0,
        y:0
    });

    return(
        <div>
            <h1>Treat state as read-only correctly</h1>
            <div 
                onPointerMove={e => {
                    setPosition({
                        x:e.clientX,
                        y:e.clientY
                    });
                }}
                style={{
                    position:'relative',
                    width:'100vw',
                    height:'100vw'
                }}
            >
            <div style={{
                position:'absolute',
                background:'red',
                borderRadius:'50%',
                transform:`translate(${position.x}px,${position.y}px)`,
                left:-10,
                top:-10,
                width:20,
                height:20,
                }}
            />
            </div>
        </div>
    )
}