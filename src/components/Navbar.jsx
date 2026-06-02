import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center gap-x-[10%] text-lg mb-10'>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-white"} to="/" aria-label="Go to Home page">Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-white"} to="/about" aria-label="Go to About page">About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-white"} to="/recipes" aria-label="View all recipes">Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-500" : "text-white"} to="/fav" aria-label="View favourite recipes">Favourite</NavLink>
        <button className='bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer ease-in-out duration-100 active:scale-95 hover:bg-red-800' onClick={()=>{navigate("/create")}} aria-label="Create new recipes">Create Recipes</button>
    </div>
  )
}

export default Navbar