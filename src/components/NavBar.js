import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="nab-bar-container">
      <Link to={"/"}>
        {
          <div className="Logo-holder">
            <span>{<Logo />}Kita-Book</span>
          </div>
        }
      </Link>

      <div className="About-nav">
        {/* <Link className='About-Link' to={"/About"}>
          <p>About</p></Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
