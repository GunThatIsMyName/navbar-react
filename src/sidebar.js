import React from "react";
import { links } from "./data";

const Sidebar = () => {
  return (
    <>
      <h1>sidebar</h1>
      <ul className="links">
        {links.map((items) => {
          const { id, url, text } = items;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
