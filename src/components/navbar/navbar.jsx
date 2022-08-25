import React from "react";
import CartWidget from "../cartWidget/cartWidget";
import "./navbar.css"



const Nabvar = () => {
    return(
        <nav className="navbar 3xl:w-full">
        
            <ul>
                <li>
                    <a href="https://es-la.facebook.com/">Nuestras imagenes</a>
                </li>

                <li>
                    <a href="https://es-la.facebook.com/">Nosotros</a>
                </li>

                <li>
                    <a href="https://es-la.facebook.com/">Contacto</a>
                </li>
            </ul>
            <CartWidget itemCount={2} />
        </nav>
    );
};

export default Nabvar;