import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import RoomPage from './pages/room/RoomPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>}/>
      </Routes>
    </div>
  )
}

export default App