import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import assets
import './assets/scss/style.scss';

//import component
// import Home from './view/Home';
import Dashboards from './view/Dashboards';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Dashboards />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
