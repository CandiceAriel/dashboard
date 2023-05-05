import React from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import PropTypes from 'prop-types'

class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      tasks: []
    };
  }

  fetchTaskStatus = async () => {
    await axios.get('http://localhost:3001/status')
      .then(response => {
        const data = response.data;
        this.setState({ status: data });
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.status;
  }

  fetchTasks = async () => {
    await axios.get('http://localhost:3001/tasks/todo')
      .then(response => {
        const data = response.data;
        this.setState({ tasks: data });
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.tasks;
  }

  componentDidMount() {
    this.fetchTaskStatus();
    this.fetchTasks();
  }

  render() {
    const { status } = this.state;
    const { tasks } = this.state;

    return (
      <div className="c-kanban__wrapper c-base__sub-view">
        <div className="c-kanban__wrapper-content">
          <Sidebar />
          <div className="c-kanban__wrapper-content c-kanban__wrapper-content-right">
            <Navbar />
            <div className='c-kanban__wrapper-content-bottom c-kanban__content'>
              {status.map((item, index) => (
                <div key={index} className='c-kanban__wrapper-task'>
                  <span key={index} className='c-kanban__task-status-title'>{item.status}</span> 
                  { item.id === 1 &&
                    tasks.map((task, index) => (
                      <div key={index} className='c-kanban__task'>
                        <span>{task.title}</span>
                        <div className='c-kanban__task-status-btn c-kanban__task-status-btn_todo'><span>To Do</span></div>
                      </div>
                    ))
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Kanban;