import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CourseDisplay from './components/CourseDisplay'
import FullStackDevelopment from './components/FullStackDevelopment'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Career from './components/Career'

function App() {
 
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<CourseDisplay/>}/>
      <Route path="/fsd" element={<FullStackDevelopment/>}/>
      <Route path="/cs" element={<CyberSecurity/>}/>
      <Route path="/ds" element={<DataScience/>}/>
      <Route path="/career" element={<Career/>}/>
      </Routes>
    </>
  )
}

export default App
