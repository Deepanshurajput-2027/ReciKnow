import React from 'react'

const RecipeForm = ({ register, handleSubmit, errors, onSubmit, reset, isUpdate }) => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5 w-full max-w-lg bg-gray-700 p-8 rounded-2xl shadow-xl'>
                <h1 className='text-3xl font-semibold mb-2'>{isUpdate ? "Update Recipe" : "Create a Recipe"}</h1>
                <input className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300' type="text" placeholder="Recipe Title"  {...register("title")} />
                <small className='text-red-500 mt-[-22px]'>{errors.title?.message}</small>
                <input className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100' type="url" placeholder='Recipe Image URL' {...register("image")} />
                <small className='text-red-500 mt-[-22px]'>{errors.image?.message}</small>
                <textarea className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-24' placeholder="Recipe Description" {...register("description")} />
                <small className='text-red-500 mt-[-22px]'>{errors.description?.message}</small>
                <textarea className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-24' placeholder="Recipe Ingredients (comma separated)" {...register("ingredients")} />
                <small className='text-red-500 mt-[-22px]'>{errors.ingredients?.message}</small>
                <textarea className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300 resize-none h-32' placeholder="Recipe Instructions" {...register("instructions")} />
                <small className='text-red-500 mt-[-22px]'>{errors.instructions?.message}</small>
                <select className='p-3 bg-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition-all text-white placeholder-gray-300' defaultValue="" {...register("category")}>
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