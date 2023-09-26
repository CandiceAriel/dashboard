import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TasksTable from '../components/TasksTable'

class Dashboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="c-base__view">
          <Sidebar />
          <div className="c-base__wrapper c-base__wrapper-content-right">
            <Navbar />
            <div className='c-dashboard__content'>
                <h3>All Tasks</h3>
                <TasksTable />
            </div>
          </div>
      </div>
    )
  }
}

export default Dashboards;
