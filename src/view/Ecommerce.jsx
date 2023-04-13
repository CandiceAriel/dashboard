import '../assets/scss/style.scss'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Stacked from '../components/Charts/Stacked';
// import Doughnut from '../components/Charts/Pie;'
// import SparkLine from '../components/Charts/SparkLine'
// import { earningData, SparklineAreaData,ecomPieChartData } from '../assets/js/dummy';

function Ecommerce() {
  return (
    <div className="c-ecom__wrapper">
      <div className="c-base__wrapper_left">
        <Sidebar />
      </div>
      <div className="c-base__wrapper_right">
        <Navbar />
        <div className="c-base__content_right c-ecom__content">
          <h1>Ecommerce</h1>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
