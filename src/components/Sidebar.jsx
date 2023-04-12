import * as React from "react";
//import { Link } from "react-router-dom";

import { links } from "../assets/js/dummy";

function Sidebar() {
  return (
    <div className='c-sidebar__wrapper'>
      {links.map((item) => (
        <div className='c-sidebar__item'>
          <p>{item.title}</p>
          {item.links.map((link) => (
            <div className='c-sidebar__item-sub'>
              {link.icon}
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar