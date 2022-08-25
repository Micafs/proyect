import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Main from "./components/main/main";
import Nabvar from "./components/navbar/navbar";
import './index.css';


const App= () => {
  return (
    <>
      <Nabvar />
      <ItemListContainer saludo='Hola Amigos!' />
      <body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
      
      <Main/>



    </>
  );
};

export default App;