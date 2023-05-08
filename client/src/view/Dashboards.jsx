import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboards() {
  return (
    <div className="c-dashboards__wrapper">
      <div className="c-base__wrapper-content">
        <Sidebar />
        <div className="c-base__wrapper-content c-base__wrapper-content-right">
          <Navbar />
          <div className='c-base__wrapper-content-bottom c-base__content'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
