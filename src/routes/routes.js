import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//import component
import Dashboards from '../view/Dashboards';
import Ecommerce from '../view/Ecommerce';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboards />} />
      <Route path='/' element={<Ecommerce />} />
    </Routes>
  )
}
