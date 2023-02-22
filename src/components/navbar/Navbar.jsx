import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { RiCloseLine, RiMenu3Line } from "react-icons/Ri";
import gpt from "../../assets/gpt.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu((prev) => setToggleMenu(!prev));
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/" className="logo">
          <img src={gpt} alt="NavLogo" />
        </Link>
        {/* <a href=""></a> */}
        <div className="nav__links-container">
          <NavLink className="nav-link" to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/whatIsGpt">
            What Is GPT?
          </NavLink>
          <NavLink className="nav-link" to="/caseStudies">
            Case Studies
          </NavLink>
          <NavLink className="nav-link" to="/library">
            Library
          </NavLink>
        </div>
        <div className="nav__links-container-link">
          <NavLink className="nav-link" to="/signIn">
            Sign in
          </NavLink>
          <button className="signUp-btn">Sign up</button>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine size={30} onClick={handleToggle} />
          ) : (
            <RiMenu3Line size={30} onClick={handleToggle} />
          )}
          {toggleMenu && (
            <div className="navbar-menu-container">
              <div className="navbar-menu-container-links">
                <NavLink to="/Home">Home</NavLink>
                <NavLink to="/whatIsGpt">What Is GPT?</NavLink>
                <NavLink to="/caseStudies">Case Studies</NavLink>
                <NavLink to="/library">Library</NavLink>
                <RiCloseLine
                  size={30}
                  className="ri-closeLine"
                  onClick={handleToggle}
                />
              </div>
              <div className="navbar-menu-container-links-btn">
                <NavLink to="/signIn">Sign in</NavLink>
                <button className="signUp-btn">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
