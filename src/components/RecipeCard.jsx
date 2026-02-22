import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
  return (
    <Link
        to={`/recipes/details/${recipe.id}`}
        key={recipe.id}
        className="flex flex-col bg-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 relative z-0 hover:z-10"
      >
        <div className="h-72 w-full relative">
          <img
            className="w-full h-full object-center object-fill"
            src={
              recipe.image ||
              "https://imgs.search.brave.com/K7TdjciLTAmvqtg6-fqKm20muPAAzRMj1OonJ6HIhME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg5LzU1LzE1/LzM2MF9GXzg5NTUx/NTk2X0xkSEFaUnd6/M2k0RU00SjBOSE5I/eTJoRVVZRGZYYzBq/LmpwZw"
            }
            alt={recipe.title}
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wider shadow-lg">
            {recipe.category || "General"}
          </div>
        </div>
        <div className="p-6 flex flex-col gap-y-4 flex-grow">
          <h1 className="text-3xl text-white font-bold tracking-tight line-clamp-1">
            {recipe.title}
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {recipe.description}
          </p>
          <div className="flex flex-col gap-y-3 mt-auto pt-4 border-t border-gray-600">
            <div>
              <h3 className="font-semibold text-red-500 text-sm uppercase tracking-wider mb-1">
                Ingredients
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {recipe.ingredients}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-red-500 text-sm uppercase tracking-wider mb-1">
                Instructions
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {recipe.instructions.slice(0,50)}...{" "}
                <small className="text-blue-500">more</small>
              </p>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default RecipeCard