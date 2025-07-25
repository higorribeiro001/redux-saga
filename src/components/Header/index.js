import React from 'react';
import { Nav } from './styled';
import {
    FaHome,
    FaSignInAlt,
    FaUserAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector } from 'react-redux';

// instalar o react-icons: npm i react-icons
export default function Header() {
    // const botaoClicado = useSelector(
    //     (state) => state.example.botaoClicado,
    // );

    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/register">
                <FaUserAlt />
            </Link>
            <Link to="/login">
                <FaSignInAlt />
            </Link>
        </Nav>
    );
}
