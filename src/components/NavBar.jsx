import React from "react";
import "../Styles/NavBar.css";
import CartWidget from "./CartWidget";
import Brand from "../assets/brand.svg"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbarContainer">
        
        <Link to ={'/'} ><img  style={{ width: "46px", height: "46px", cursor: "pointer" }} src={Brand} alt="" /></Link>

        <ul className="navbarList">
        <li className="navbarItem">
            <NavLink to ={'/category/guitars'}>Guitarras</NavLink>
          </li>
          <li className="navbarItem">
            <NavLink to ={'/category/bass'} >Bajos</NavLink>
          </li>
          <li className="navbarItem">
            <NavLink to ={'category/amps'}>Amplificadores</NavLink>
          </li>
          <li className="navbarItem">
            <NavLink to ={'category/props'}>Accesorios</NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
