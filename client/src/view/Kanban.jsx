import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Board from '../components/Kanban/Board';

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="c-kanban__wrapper c-base__sub-view">
        <div className="c-kanban__wrapper-content">
          <Sidebar />
          <div className="c-kanban__wrapper-content c-kanban__wrapper-content-right">
            <Navbar />
            <div className='c-kanban__wrapper-content-bottom c-kanban__board'>
              <Board />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kanban;