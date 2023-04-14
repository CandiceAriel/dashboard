import '../assets/scss/style.scss'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import heroimg from '../assets/images/welcome-bg.svg'

//import chart 
// import Stacked from '../components/Charts/Stacked';
import Doughnut from '../components/Charts/Pie';
// import SparkLine from '../components/Charts/SparkLine'
import { earningData, SparklineAreaData,ecomPieChartData } from '../assets/js/dummy';

function Ecommerce() {
  return (
    <div className="c-base__wrapper">
      <div className="c-base__wrapper_left">
        <Sidebar />
      </div>
      <div className="c-base__wrapper_right">
        <Navbar />
        <div className="c-base__content_right c-ecom__content">
          <div className='c-ecom__content c-ecom__hero' style={{ backgroundImage: "url(" + heroimg + ")" }}>
            <div className='c-ecom__content c-ecom__hero-info'>
              <p className='c-ecom__content-hero c-ecom__hero-info-title c-base__text_bold'>Earnings</p>
              <p className='c-ecom__content-hero c-ecom__hero-info-amount c-ecom__text_normal'>$63,448.78</p>
              <div className='e-btn__sec'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
