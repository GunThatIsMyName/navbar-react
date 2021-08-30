import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setSHowLinks] = useState(false);
  const useContainerRef = useRef(null)
  const useLinksRef = useRef(null)
  useEffect(()=>{
    const {height} = useLinksRef.current.getBoundingClientRect();
    if(showLinks){
      useContainerRef.current.style.height = `${height}px`
    }else{
      useContainerRef.current.style.height = `0px`
    }
  },[showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button onClick={()=>setSHowLinks(!showLinks)} className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={useContainerRef}>
          <ul className="links" ref={useLinksRef}>
            {links.map((items) => {
              const { id, url, text } = items;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
