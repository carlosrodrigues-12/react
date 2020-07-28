import React from 'react';
import Logo from '../../assets/img/Logo.png';
import '../Menu/Menu.css';
// import ButtonLink from './components/ButtonLink';
import Buttton from "../Button";

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do MegaFlix"/>
            </a>
            <Buttton as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Buttton>
        </nav>
    );
}

export default Menu;