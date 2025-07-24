import React from 'react';
import { Nav } from './styled';
import {
    FaHome,
    FaSignInAlt,
    FaUserAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// instalar o react-icons: npm i react-icons
export default function Header() {
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUserAlt />
            </Link>
            <Link to="/asdf">
                <FaSignInAlt />
            </Link>
        </Nav>
    );
}
