import React, { Component } from 'react'
import axios from 'axios';

import Task from './Task';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      tasksToDo: []
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
        this.setState({ tasksToDo: data });
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
    return (
      status.map((item, index) => (
        <div key={index} className='c-kanban__board'>
          <span key={index} className='c-kanban__task-status-title'>{item.status}</span>
          {item.id === 1 &&
            <Task status={1} />
          }
        </div>
      ))
    )
  }
}

export default Board