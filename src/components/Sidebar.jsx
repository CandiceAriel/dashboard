import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import { links } from "../assets/js/dummy";
import logo from '../assets/images/logo-yariga.svg';

function Sidebar() {
  const [active, setActive] = useState(null)

  const navigate = (txt) => {
    setActive(txt);
    console.log(active)
  };

  return (
    <div className='c-sidebar__wrapper'>
      <div className='c-sidebar__logo'><img src={logo} alt=''/><span className='c-sidebar__logo-text'>Yariga</span></div>
      {links.map((item) => (
        <div className='c-sidebar__item' key={item.title}>
          <div 
            onClick={() => navigate(item.title)}
            className='c-sidebar__item'
            isActive={active === item.id}
          >
            {item.title}
          </div>
          {item.links.map((link) => (
            <NavLink
              to={`/${link.name}`}
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