import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { AnimatePresence } from "framer-motion"

export const MyRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigate to="/home"/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
    </AnimatePresence>
  )
}
