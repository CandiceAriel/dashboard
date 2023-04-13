import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import assets
import './assets/scss/style.scss';

//import component
import Dashboards from './view/Dashboards';
import Ecommerce from './view/Ecommerce';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Dashboards />}/>
            <Route path='/ecommerce' element={<Ecommerce />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
