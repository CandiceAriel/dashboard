import React from "react";

//import assets
import '../assets/scss/style.scss';
import bellic from '../assets/images/Union.svg';
import actuserimg from '../assets/images/active-user.svg';


function Navbar() {
  return (
    <div className='c-navbar__wrapper'>
      <div className='c-navbar__content-search'></div>
      <div className='c-navbar__content-act-user'>
        <img  className='c-navbar__icon-notif' src={bellic} alt=''/>
        <img  className='c-navbar__content-act-user-img' src={actuserimg} alt=''/>
        <div className='c-navbar__content-act-user-info'>
          <span className='c-navbar__content-act-user-info-name'>Hawkins Maru</span>
          <span>Company Manager</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
