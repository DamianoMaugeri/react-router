import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import MainLayout from './layouts/MainLayout'

import AboutMe from './pages/AboutMe.jsx'
import HomePage from './pages/Homepage.jsx'
import Posts from './pages/Posts.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} path='/'>
            <Route path='' element={<HomePage />}></Route>
            <Route path='aboutme' element={<AboutMe />}></Route>
            <Route path='posts' element={<Posts />}></Route>

          </Route>

        </Routes>




      </BrowserRouter>
    </>
  )
}

export default App
