import React from "react";
import Buttonmain from "../components/Button"


function Header() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <div className="icon"><h1 className="logo">GLOBAL<span>TRACK</span></h1></div>
            <div className="icon-sub">
                <h6 className="logo">Powered by <br />& Global Partners</h6>
            </div>
          <nav>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Service">Services</a>
            <Buttonmain />
            <a href="Contact">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header