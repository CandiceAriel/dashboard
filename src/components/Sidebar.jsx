import React, {useState,useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";

import { links } from "../assets/js/dummy";
import { menus } from "../assets/js/data";
import logo from '../assets/images/logo-yariga.svg';

function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(null)
  const [currRoute, setCurrRoute] = useState(null)

  const navigate = (txt) => {
    setActive(txt);
  };

  function CheckRoute() {
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    if( splitLocation[0] === "" ){
      setActive('ecommerce')
    } else setActive('');
  }

  useEffect(() => {
    CheckRoute()//first execution
  }, []);

  return (
    <div className='c-sidebar__wrapper'>
      <div className='c-sidebar__logo'><img src={logo} alt=''/><span className='c-sidebar__logo-text'>Yariga</span></div>
      {menus.map((item) => (
        <div className='c-sidebar__item' key={item.title}>
          <div 
            onClick={() => navigate(menus)}
            className='c-sidebar__item'
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