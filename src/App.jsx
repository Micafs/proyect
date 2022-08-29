import React from "react";
import ItemCount from "./components/itemCount/itemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nabvar from "./components/navbar/navbar";




const App= () => {
  const handleItemAdd =() =>{
    console.log('Ya agregamos los productos')
  }
  return (
    <>
    <body>
      
      <Nabvar />
      <ItemListContainer saludo='Hola Amigos!' />
      <ItemCount stock={20} initial={2} onAdd={handleItemAdd} />
      



    </body>
      



    </>
  );
};

export default App;