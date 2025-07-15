import React, { useState, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={Logo} width={55} alt="profile" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink href="#home" onClick={closeMenu}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" onClick={closeMenu}>
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills" onClick={closeMenu}>
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects" onClick={closeMenu}>
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
