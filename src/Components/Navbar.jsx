import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/productos" className="navbar-brand">
                React PARCIAL & Json server
            </Link>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to='/ListaUsua'
                        className="nav-link"
                        activeClassName="active"
                    >Usuarios</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to='/nuevoUsuario'
                        className="nav-link"
                        activeClassName="active"
                    >Nuevo Producto</NavLink>
                </li>
            </ul>
        </div>
    </nav>

);


export default Navbar;