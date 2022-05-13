import React, {useState} from "react";

export function ItemCount() {
    const [count, setCount] = useState(0);
    
    const sumar = () => {
        if(count < stock){

            setCount (count +1)
        }
    }
    const restar = () => {
        if (count >0){

            setCount (count -1)
        }
    }
    
    return (
        <>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
        </>
    )

}