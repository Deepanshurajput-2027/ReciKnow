import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipes from '../pages/CreateRecipes'
import SingleRecipe from '../pages/SingleRecipe.jsx'
import Fav from '../pages/Fav.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/about' element={<About />} />
      <Route path='/create' element={<CreateRecipes />} />
      <Route path='/recipes/details/:id' element={<SingleRecipe />} />
      <Route path='/fav' element={<Fav />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )
}

export default MainRoutes
