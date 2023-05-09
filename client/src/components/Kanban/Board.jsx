import React, { Component } from 'react'
import axios from 'axios';

import Card from './Card';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      tasks: [],
      toDo: [],
      inProgress: []
    };
  }

  fetchTaskStatus = async () => {
    await axios.get('http://localhost:3001/status')
      .then(response => {
        const data = response.data;
        this.setState({ status: data });
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.status;
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

  fetchToDo = async () => {
    await axios.get('http://localhost:3001/tasks/todo')
      .then(response => {
        const data = response.data;
        this.setState({ toDo: data });
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.toDo;
  }

  componentDidMount() {
    this.fetchTaskStatus();
    this.fetchTasks();
    this.fetchToDo();
  }

  render() {
    const { status } = this.state;
    const { tasks } = this.state;
    const { inProgress } = this.state;

    return (
      status.map((item, index) => {
        // if (item.id === 1) {
        //   return (
        //     <div key={index} className='c-kanban__column'>
        //       <span key={index} className='c-kanban__column-title'>{item.status}</span>
        //       {tasks.filter(t => t.task_status === 1).map((t, i) => (
        //         <Card status={1} title={t.title} key={t.id} />
        //       ))}
        //     </div>
        //   )
        // } else if (item.id === 2) {
        //   return (
        //     <div key={index} className='c-kanban__column'>
        //       <span key={index} className='c-kanban__column-title'>{item.status}</span>
        //       {tasks.filter(t => t.task_status === 2).map((t, i) => (
        //         <Card status={2} title={t.title} key={t.id} />
        //       ))}
        //     </div>
        //   )
        // }
        // else if (item.id === 3) {
        //   return (
        //     <div key={index} className='c-kanban__column'>
        //       <span key={index} className='c-kanban__column-title'>{item.status}</span>
        //       { tasks.filter(t => t.task_status === 3).map((t, i) => (
        //         <Card status={3} title={t.title} key={t.id} />
        //       ))}
        //     </div>
        //   )
        // }
        return (
          <div key={index} className='c-kanban__column'>
            <span key={index} className='c-kanban__column-title'>{item.status}</span>
            { tasks.filter(t => t.task_status === item.id).map((t, i) => (
                <Card status={item.id} title={t.title} key={t.id} />
            ))}
          </div>
        )
      })
    )
  }
}

export default Board