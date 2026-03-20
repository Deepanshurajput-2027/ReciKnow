import RecipeCard from "../components/RecipeCard"
import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"

const Fav = () => {
    const { data } = useContext(recipecontext);
    const favRecipes = data.filter((recipe) => recipe.isFavorite);
    const unFavRecipes = data.filter((recipe) => !recipe.isFavorite);

    return (
        <div className="w-full min-h-screen py-10 px-4 md:px-8">
            <h1 className="text-4xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
                <span className="text-green-500">♥</span> Your Favorites
            </h1>

            {favRecipes.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-48 bg-gray-800 rounded-3xl border border-gray-700 mb-16 shadow-lg">
                    <h1 className="text-2xl text-gray-400 font-semibold mb-2">No Favorite Recipes Yet!</h1>
                    <p className="text-gray-500">Go to any recipe's detail page and click the heart icon to add one.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
                    {favRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            )}

            {unFavRecipes.length > 0 && (
                <>
                    <hr className="border-gray-700/50 max-w-7xl mx-auto mb-16" />
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Explore other recipes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500">
                        {unFavRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Fav