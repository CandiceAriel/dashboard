import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksToDo: [],
      tasksInProgress: [],
      tasks: {
        todo: [],
      }
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
    return this.state.tasksToDo;
  }

  fetchInProgress = async () => {
    await axios.get('http://localhost:3001/tasks/inprogress')
      .then(response => {
        const data = response.data;
        this.setState({ tasksInProgress: data });
      })
      .catch(error => {
        console.log(error);
      });
    return this.state.tasksInProgress;
  }

  componentDidMount() {
    this.fetchToDo();
    this.fetchInProgress();
  }

  render() {
    return(
      <div key={this.props.id} className='c-kanban__card'>
            <span>{this.props.title}</span>
            <div className='c-kanban__card-status-btn c-kanban__card-status-btn_todo'><span>To Do</span></div>
          </div>
    )
    // if (this.props.status === 1) {
    //   return (
    //     tasksToDo.map((task, index) => (
    //       <div key={index} className='c-kanban__card'>
    //         <span>{this.props.title}</span>
    //         <div className='c-kanban__card-status-btn c-kanban__card-status-btn_todo'><span>To Do</span></div>
    //       </div>
    //     ))
    //   )
    // }
    // else if (this.props.status === 2){
    //   return (
    //     tasksInProgress.map((task, index) => (
    //       <div key={index} className='c-kanban__card'>
    //         <span>{this.props.title}</span>
    //         <div className='c-kanban__card-status-btn c-kanban__card-status-btn_todo'><span>In Progress</span></div>
    //       </div>
    //     ))
    //   )
    // } else return <div></div>
  }
}

export default Card;