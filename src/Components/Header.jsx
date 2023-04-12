import React from "react"; /* 
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"; */

function Header() {
  return (
    <>
      <nav id="home">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
