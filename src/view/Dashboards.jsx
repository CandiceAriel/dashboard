import '../assets/scss/style.scss'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboards() {
  return (
    <div className="c-dashboards__wrapper">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Dashboards;
