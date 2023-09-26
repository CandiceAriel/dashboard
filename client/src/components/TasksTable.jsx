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
          <div key={index} className=''>
            <span key={index} className='c-kanban__column-title'>{item.title}</span>
            <span key={index} className='c-kanban__column-title'>{item.status}</span>
          </div>
        )
      })
    )
  }
}

export default TasksTable;
