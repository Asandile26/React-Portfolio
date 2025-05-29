import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} width={55} alt="profile" />
      <ul className="nav-menu">
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills">Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
