import { Link, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useContext } from 'react'
import { PencilIcon, Trash2Icon } from 'lucide-react'
import { toast } from 'react-toastify'

const SingleRecipe = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { data, setData } = useContext(recipecontext)
    const recipe = data.find(recipe => String(recipe.id) === params.id)

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            const updatedRecipes = data.filter(r => String(r.id) !== params.id)
            setData(updatedRecipes)
            toast.success("Recipe deleted successfully")
            navigate('/recipes')
        }
    }

    return (
        recipe ?
            <div className="w-full max-w-4xl mx-auto p-6 bg-gray-800 rounded-3xl shadow-2xl my-8 relative">
                <div className="absolute top-6 right-6 flex gap-4">
                    <Link to={`/recipes/update/${recipe.id}`} className="p-3 bg-blue-500/20 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                        <PencilIcon size={24} />
                    </Link>
                    <button onClick={handleDelete} className="p-3 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                        <Trash2Icon size={24} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-12">
                    <div className="w-full md:w-1/2">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-[400px] object-cover rounded-2xl shadow-lg border-4 border-gray-700" />
                        <div className="mt-6 flex justify-between items-center text-gray-300 bg-gray-700/50 p-4 rounded-xl">
                            <span className="font-semibold text-white bg-red-500 px-4 py-1.5 rounded-full text-sm">{recipe.category}</span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-white mb-4">{recipe.title}</h1>
                        <p className="text-gray-300 text-lg leading-relaxed">{recipe.description}</p>

                        <div className="bg-gray-700/40 p-6 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                                Ingredients
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2 text-lg">
                                {(Array.isArray(recipe.ingredients) ? recipe.ingredients : recipe.ingredients.split(',')).map((item, index) => (
                                    <li key={index} className="pl-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-gray-700/40 p-8 rounded-2xl w-full">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                        Instructions
                    </h2>
                    <ol className="space-y-6 text-gray-300">
                        {(Array.isArray(recipe.instructions) ? recipe.instructions : recipe.instructions.split('\n')).map((step, index) => (
                            <li key={index} className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center font-bold text-white">{index + 1}</span>
                                <p className="text-lg leading-relaxed mt-0.5">{step}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div> :
            <div className="flex justify-center items-center h-[60vh]">
                <p className="text-gray-400 text-2xl font-semibold">Recipe not found or loading...</p>
            </div>
    )
}

export default SingleRecipe