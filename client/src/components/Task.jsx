import React, { Component } from 'react';
import axios from 'axios';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksToDo: []
    };
  }

  fetchToDo = async () => {
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
    this.fetchToDo();
  }

  render() {
    const { tasksToDo } = this.state;
    if (this.props.status === 1) {
      return (
        tasksToDo.map((task, index) => (
          <div key={index} className='c-kanban__task'>
            <span>{task.title}</span>
            <div className='c-kanban__task-status-btn c-kanban__task-status-btn_todo'><span>To Do</span></div>
          </div>
        ))
      )
    }

  }
}

export default Task;