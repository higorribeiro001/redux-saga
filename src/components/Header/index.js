import React from "react";
import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

// instalar o react-icons: npm i react-icons
export default function Header() {
    return <Nav>
        <a href="">
            <FaHome size={24} />
        </a>
        <a href="">
            <FaUserAlt />
        </a>
        <a href="">
            <FaSignInAlt />
        </a>
    </Nav>;
}
