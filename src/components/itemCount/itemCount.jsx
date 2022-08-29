import React, { useEffect, useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const[contador, setContador] = useState(initial);

    const handleSum = () => {
        setContador(contador + 1);

    };

    const restar = () => {
        setContador(contador - 1);
    };

    const handleAdd = () =>{
        onAdd()
    };

    useEffect(()=>{
        if (contador > stock){
            console.log('no tenemos mas stock')
            setContador (stock)
        }
        if (contador < initial){
            console.log('es menor a ', initial)
            setContador(initial)
        }

    
    },[contador])

  return (
    <div>
        <button onClick={handleSum}>+</button>
            <p>total : { contador}</p>
        <button onClick={restar}>-</button>
        <br />
        <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount