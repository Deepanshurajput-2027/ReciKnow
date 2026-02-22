import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="bg-gray-800 py-10 px-[10%] text-white font-thin w-full min-h-screen">
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App
