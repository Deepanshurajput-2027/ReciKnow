import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import RecipeForm from '../components/RecipeForm'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateRecipes = () => {
    const navigate = useNavigate()
    const { data, setData } = useContext(recipecontext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const onSubmit = (recipe) => {
        console.log(recipe)

        recipe.id = nanoid(10)
        recipe.ingredients = recipe.ingredients.split(',').map(item => item.trim())
        recipe.instructions = recipe.instructions.split('\n').map(item => item.trim()).filter(item => item !== '')

        setData([...data, recipe])
        toast.success("Recipe created successfully")
        reset()
        navigate('/recipes')
    }


    return (
        <RecipeForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} reset={reset} />
    )
}

export default CreateRecipes