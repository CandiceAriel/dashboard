import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import component
import Dashboards from '../view/Dashboards';
import Kanban from '../view/Kanban';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboards />} />
      <Route path='/kanban' element={<Kanban />} />
    </Routes>
  )
}
