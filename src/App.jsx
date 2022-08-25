import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nabvar from "./components/navbar/navbar";




const App= () => {
  return (
    <>
    <body>
      
      <Nabvar />
      <ItemListContainer saludo='Hola Amigos!' />
      



    </body>
      



    </>
  );
};

export default App;