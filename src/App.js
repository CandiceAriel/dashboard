import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import assets
import './assets/scss/style.scss';

//import component
import Navbar from './components/Navbar';
// import Home from './view/Home';
// import Dashboards from './view/Dashboards';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path='/' element='Dashboards'></Route>
            <Route path='/properties' element='Home'></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
