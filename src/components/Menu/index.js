import React from 'react';
import logo from '../../assets/img/logoLeFlix.png';
import './Menu.css'
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="LeFlix Logo"></img>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu