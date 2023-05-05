import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Kanban = () => {
  return (
    <div className="c-kanban__wrapper c-base__sub-view">
      <div className="c-kanban__wrapper-content">
        <Sidebar />
        <div className="c-kanban__wrapper-content c-kanban__wrapper-content-right">
          <Navbar />
          <div className='c-kanban__wrapper-content-bottom c-kanban__content'>
            <div className='c-kanban__wrapper-task'>To Do</div>
            <div className='c-kanban__wrapper-task'>In Progress</div>
            <div className='c-kanban__wrapper-task'>Done</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kanban