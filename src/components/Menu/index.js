import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logoLeFlix.png';
import './Menu.css'
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="LeFlix Logo"></img>
            </Link>
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu