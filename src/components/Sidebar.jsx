import React, { useState} from "react";
import { NavLink } from "react-router-dom";

import { links } from "../assets/js/dummy";

function Sidebar() {
  const [active, setActive] = useState(null)

  const navigate = (txt) => {
    setActive(txt);
    console.log(active)
  };

  return (
    <div className='c-sidebar__wrapper'>
      {links.map((item) => (
        <div className='c-sidebar__item' key={item.title}>
          <div 
            onClick={() => navigate(item.title)}
            className={`c-sidebar__item e-btn__primary ${active === item.title ? 'e-btn__primary_active' : ''}`}
            isActive={active === item.id}
          >
            {item.title}
          </div>
          {item.links.map((link) => (
            <NavLink
              // to={`/${link.name}`}
              key={link.name}
              onClick={() => navigate(link.name)}
              className={`c-sidebar__item-sub ${active === link.name ? 'c-sidebar__item-sub_active' : ''}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar