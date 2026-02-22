import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => {
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    );
  });

  return (
    <div className="w-full h-full">
      {data.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-400 text-2xl font-semibold">
            No recipes yet. Go create one!
          </p>
        </div>
      ) : (
        <div className="max-h-[75vh] overflow-y-auto overflow-x-hidden p-4 -m-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderRecipe}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
