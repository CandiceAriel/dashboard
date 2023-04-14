import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import assets
import './assets/scss/style.scss';

//import component
import Dashboards from './view/Dashboards';
import Ecommerce from './view/Ecommerce';
import { PageRoutes } from './routes/routes';

function App() {
  return (
    <div className='App'>
      <PageRoutes />
    </div>
  );
}

export default App;
