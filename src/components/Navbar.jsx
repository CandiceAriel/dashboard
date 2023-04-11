//import assets
import '../assets/scss/style.scss';
import logo from '../assets/images/logo-yariga.svg';
import bellic from '../assets/images/Union.svg';
import actuserimg from '../assets/images/active-user.svg';

function Navbar() {
  return (
    <div className='c-navbar__wrapper'>
      <div className='c-navbar__content-logo'><img src={logo} alt=''/><span className='c-navbar__content-logo-text'>Yariga</span></div>
      <div className='c-navbar__content-search'></div>
      <div className='c-navbar__content-act-user'>
        <img  className='c-navbar__icon-notif' src={bellic} alt=''/>
        <img  className='c-navbar__act-user-img' src={actuserimg} alt=''/>
        <div className='c-navbar__content-act-user-info'>
          <p>Hawkins Maru</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
