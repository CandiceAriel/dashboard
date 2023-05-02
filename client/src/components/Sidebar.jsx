import React, {useState,useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";

import { links } from "../assets/js/dummy";
import logo from '../assets/images/logo-yariga.svg';

function Sidebar() {
  const location = useLocation();
  const [active, setActive] = useState(null)
  const [currRoute, setCurrRoute] = useState(null)

  const navigate = (txt) => {
    setActive(txt);
    console.log(active);
  };

  function CheckRoute() {
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/ ');
    if( splitLocation[0] === '/kanban' ){
      setActive('kanban')
    } else setActive('');
    console.log(splitLocation);
  }

  useEffect(() => {
    CheckRoute()//first execution
  }, []);

  return (
    <div className='c-sidebar__wrapper'>
      <div className='c-sidebar__logo'><img src={logo} alt=''/><span className='c-sidebar__logo-text'>Yariga</span></div>
      <NavLink
        to={`/kanban`}
        onClick={() => navigate('kanban')}
        className={`c-sidebar__menu ${active === 'kanban' ? 'c-sidebar__menu-sub_active' : ''}`}
      >
        <span>Kanban</span>
      </NavLink>
    </div>
  )
}

export default Sidebar