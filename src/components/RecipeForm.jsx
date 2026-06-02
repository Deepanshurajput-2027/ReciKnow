import React from 'react'

const RecipeForm = ({ register, handleSubmit, errors, onSubmit, reset, isUpdate }) => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5 w-full max-w-lg bg-gray-700 p-8 rounded-2xl shadow-xl'>
                <h1 className='text-3xl font-semibold mb-2'>{isUpdate ? "Update Recipe" : "Create a Recipe"}</h1>
                <label htmlFor="recipe-title" className='text-white text-lg font-medium sr-only'>Recipe Title</label>
                <input 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300'
                    type="text" 
                    id="recipe-title"
                    placeholder="Recipe Title"  
                    {...register("title")}
                    aria-invalid={errors.title ? "true" : "false"}
                    aria-describedby="title-error"
                />
                <small id="title-error" className='text-red-500 mt-[-22px]'>{errors.title?.message}</small>

                <label htmlFor="recipe-image" className='text-white text-lg font-medium sr-only'>Recipe Image URL</label>
                <input 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100'
                    type="url" 
                    id="recipe-image"
                    placeholder='Recipe Image URL' 
                    {...register("image")}
                    aria-invalid={errors.image ? "true" : "false"}
                    aria-describedby="image-error"
                />
                <small id="image-error" className='text-red-500 mt-[-22px]'>{errors.image?.message}</small>

                <label htmlFor="recipe-description" className='text-white text-lg font-medium sr-only'>Recipe Description</label>
                <textarea 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-24'
                    id="recipe-description"
                    placeholder="Recipe Description" 
                    {...register("description")}
                    aria-invalid={errors.description ? "true" : "false"}
                    aria-describedby="description-error"
                />
                <small id="description-error" className='text-red-500 mt-[-22px]'>{errors.description?.message}</small>

                <label htmlFor="recipe-ingredients" className='text-white text-lg font-medium sr-only'>Recipe Ingredients (comma separated)</label>
                <textarea 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-24'
                    id="recipe-ingredients"
                    placeholder="Recipe Ingredients (comma separated)" 
                    {...register("ingredients")}
                    aria-invalid={errors.ingredients ? "true" : "false"}
                    aria-describedby="ingredients-error"
                />
                <small id="ingredients-error" className='text-red-500 mt-[-22px]'>{errors.ingredients?.message}</small>

                <label htmlFor="recipe-instructions" className='text-white text-lg font-medium sr-only'>Recipe Instructions</label>
                <textarea 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-32'
                    id="recipe-instructions"
                    placeholder="Recipe Instructions" 
                    {...register("instructions")}
                    aria-invalid={errors.instructions ? "true" : "false"}
                    aria-describedby="instructions-error"
                />
                <small id="instructions-error" className='text-red-500 mt-[-22px]'>{errors.instructions?.message}</small>

                <label htmlFor="recipe-category" className='text-white text-lg font-medium sr-only'>Recipe Category</label>
                <select 
                    className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300'
                    id="recipe-category"
                    defaultValue=""
                    {...register("category")}
                    aria-invalid={errors.category ? "true" : "false"}
                >
                    <option disabled value="">Select Category</option>
                    <option value="Indian">Indian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Thai">Thai</option>
                </select>
                <button className='bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors active:scale-95 duration-150 mt-2' type="submit">{isUpdate ? "Update Recipe" : "Create Recipe"}</button>
            </form>
        </div>

    )
}

export default RecipeForm