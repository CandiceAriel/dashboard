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

  filterData(){
    const { tasks } = this.state;
    this.state.inProgress = tasks.filter(function(task) {
      return task.task_status == 2;
    });
  }

  componentDidMount() {
    this.fetchTaskStatus();
    this.fetchTasks();
    this.fetchToDo();
  }

  render() {
    const { status } = this.state;
    const { toDo } = this.state;
    const { inProgress } = this.state;

    return (
      // status.map((item, index) => (
      //   item.id === 1 && toDo.length > 0 ? 
      //   <div key={index} className='c-kanban__column'>
      //     <span key={index} className='c-kanban__column-title'>{item.status}</span>
      //     {(function() {
      //       if (item.id === 1) {
      //         return toDo.map((t, i) => (
      //           <Card status={1} title={t.title} key={t.id}/>  
      //         ))
      //       }
      //     })()}
      //   </div> 
      //   : item.id === 2 && inProgress.length > 0 ? 
      //   <div key={index} className='c-kanban__column'>
      //     <span key={index} className='c-kanban__column-title'>{item.status}</span>
      //     {(function() {
      //       if (item.id === 1) {
      //         return toDo.map((t, i) => (
      //           <Card status={1} title={t.title} key={t.id}/>  
      //         ))
      //       }
      //     })()}
      //   </div> 
      //   :
      //   <div key={index} className='c-kanban__column c-kanban__column_empty'>
      //     <span key={index} className='c-kanban__column-title'>{item.status}</span>
      //     {(function() {
      //       if (item.id === 1) {
      //         return toDo.map((t, i) => (
      //           <Card status={1} title={t.title} key={t.id}/>  
      //         ))
      //       }
      //     })()}
      //   </div>
      // ))
      status.map((item, index) => {
        if(item.id === 1 && toDo.length > 0){
          return (
            <div key={index} className='c-kanban__column'>
              <span key={index} className='c-kanban__column-title'>{item.status}</span>
              {(function() {
                if (item.id === 1) {
                  return toDo.map((t, i) => (
                    <Card status={1} title={t.title} key={t.id}/>  
                  ))
                }
              })()}
            </div> 
          )
        } else if(item.id === 2 && inProgress.length > 0){
          return (
            <div key={index} className='c-kanban__column'>
              <span key={index} className='c-kanban__column-title'>{item.status}</span>
              {(function() {
                if (item.id === 1) {
                  return toDo.map((t, i) => (
                    <Card status={1} title={t.title} key={t.id}/>  
                  ))
                }
              })()}
            </div> 
          )
        }
        return (
          <div key={index} className='c-kanban__column c-kanban__column_empty'>
            <span key={index} className='c-kanban__column-title'>{item.status}</span>
          </div> 
        )
      })
    )
  }
}

export default Board