import React from 'react'
import Staff from '../pages/Staff'
import Customerbooking from '../components/UI/Customerbooking'
import Customercontact from '../components/UI/Customercontact'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';

const router = () => {
  return (
    <Routes>
      <Route path="/staff" element={<Staff />} />
      <Route path="/customerbooking" element={<Customerbooking />} />
      <Route path="/customercontact" element={<Customercontact />} />
    </Routes>

  )
}

export default router