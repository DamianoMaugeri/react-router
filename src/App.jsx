import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import MainLayout from './layouts/MainLayout'

import AboutMe from './pages/AboutMe.jsx'
import HomePage from './pages/Homepage.jsx'
import Posts from './pages/posts/Posts.jsx'
import MinimalLayout from './layouts/MinimalLayout.jsx'
import Show from './pages/posts/show.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<HomePage />}></Route>
            <Route path='about-me' element={<AboutMe />}></Route>
            <Route path='posts'>
              <Route path='' element={<Posts />}> </Route>
              <Route path=':id' element={<Show />}> </Route>


            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
