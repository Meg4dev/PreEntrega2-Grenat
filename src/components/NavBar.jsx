import React from "react";
import "../Styles/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbarContainer">
        <ul className="navbarList">
          <li className="navbarItem">
            <a href="/prods">Productos</a>
          </li>
          <li className="navbarItem">
            <a href="/contact">Contacto</a>
          </li>
          <li className="navbarItem">
            <a href="/about">About</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
