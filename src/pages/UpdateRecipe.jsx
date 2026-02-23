import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import RecipeForm from '../components/RecipeForm'
import { toast } from 'react-toastify'

const UpdateRecipe = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, setData } = useContext(recipecontext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const recipeToUpdate = data.find(recipe => String(recipe.id) === id)

    useEffect(() => {
        if (recipeToUpdate) {
            // Pre-fill form with existing recipe data
            reset({
                title: recipeToUpdate.title,
                image: recipeToUpdate.image,
                description: recipeToUpdate.description,
                ingredients: recipeToUpdate.ingredients.join(', '),
                instructions: recipeToUpdate.instructions.join('\n'),
                category: recipeToUpdate.category
            })
        } else {
            toast.error("Recipe not found")
            navigate('/recipes')
        }
    }, [recipeToUpdate, reset, navigate])

    const onSubmit = (updatedData) => {
        const ingredientsArray = updatedData.ingredients.split(',').map(item => item.trim())
        const instructionsArray = updatedData.instructions.split('\n').map(item => item.trim()).filter(item => item !== '')

        const updatedRecipe = {
            ...recipeToUpdate,
            ...updatedData,
            ingredients: ingredientsArray,
            instructions: instructionsArray
        }

        const updatedRecipes = data.map(recipe => String(recipe.id) === id ? updatedRecipe : recipe)
        setData(updatedRecipes)

        toast.success("Recipe updated successfully")
        navigate(`/recipes/details/${id}`)
    }

    if (!recipeToUpdate) return null

    return (
        <RecipeForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            reset={reset}
            isUpdate={true}
        />
    )
}

export default UpdateRecipe
