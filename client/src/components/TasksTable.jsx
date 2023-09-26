import React, { Component } from 'react'
import axios from 'axios';

export class TasksTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  fetchTasks = async () => {
    await axios.get('http://localhost:3001/tasks')
      .then(response => {
        const data = response.data;
        this.setState({ tasks: data });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.tasks;
  }
  componentDidMount() {
    this.fetchTasks();
  }

  render() {
    const { tasks } = this.state;

    return (
      tasks.map((item, index) => {
        return (
          <div key={index} className='c-dashboard__task'>
            <span key={index} className='c-dashboard__task-title'>{item.title}</span>
            <span className='c-dashboard__task-status'>{item.task_status}</span>
          </div>
        )
      })
    )
  }
}

export default TasksTable;
