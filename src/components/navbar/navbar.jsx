import React from "react";
import CartWidget from "../cartWidget/cartWidget";
import Header from "../header/header";




const Nabvar = () => {
    return(
        <nav className="flex pt-2  pr-10 justify-center">
        <Header />
     
            <ul className="flex px-5">

                <li className="mr-4 ml-24">
                    <a href="https://es-la.facebook.com/">Nuestras imagenes</a>
                </li>

                <li className="mr-4">
                    <a href="https://es-la.facebook.com/">Nosotros</a>
                </li>

                <li className="mr-4">
                    <a href="https://es-la.facebook.com/">Contacto</a>
                </li>
            </ul>
            
            <CartWidget itemCount={2} />
        </nav>
    );
};

export default Nabvar;


