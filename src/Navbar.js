import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">what</a>
          </li>
          <li>
            <a href="#">mago</a>
          </li>
          <li>
            <a href="#">roby</a>
          </li>
        </ul>
      </div>
      <ul className="social-icons">
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar
