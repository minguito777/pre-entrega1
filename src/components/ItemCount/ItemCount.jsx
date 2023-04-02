import React, { useState } from 'react'
import './itemcount.css';

export const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter +1 )
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    

    }

    const resetear = () => {
        setCounter(0)
    }






  return (
    <>
    <h4>Cantidad: {counter}</h4>
    <div className='btn1'>
        <button onClick={sumar}>😀</button>
        <button onClick={restar}>😐</button>
        <button onClick={resetear}>✂</button>
    </div>
    </>
  )
}
