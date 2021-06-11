import React, { useState } from 'react';
import { HiDesktopComputer } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { items } from "./NavbarInfo";

const Navbar = () => {

    const [ estilos, setEstilos ] = useState(false);

    const onChangeEstilos = () => setEstilos(!estilos);

    return ( 
        <>
            <header className="header-nav">
                <div className="contenido-nav contenedor wrapper">
                    <div className="nav-logo">
                        <Link to="#"> <HiDesktopComputer/> </Link>
                    </div>
                    <nav className={ estilos ? "navegation active" : "navegation"} >
                        <ul>
                            { items.map( ( valor, index ) => (
                                <li onClick={onChangeEstilos} key={index} className={valor.cName}>
                                    <Link to={valor.path}>
                                        <i>{valor.icon}</i>
                                        <span>{valor.title}</span>
                                    </Link>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                    <div onClick={onChangeEstilos} className="nav-movil">
                        <i> { estilos ? <AiOutlineClose/> : <FaBars/> } </i>
                    </div>  
                </div>
            </header>
        </>
     );
}
 
export default Navbar;