import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const getTwoValueFromArray= (arr)=>{
    return [arr[0], arr[1]];
}

const RecipeCard = ({recipe,bg,badge}) => {
    const healthLabels = getTwoValueFromArray(recipe.healthLabels);
  return (
    <div className={`flex flex-col rounde-md ${bg} overflow-hidden p-3 relative`}>
    <a href="#" className='relative h-32'>
        <img src={recipe.image} alt="recipe-image" className='rounded-md w-full h-full cursor-pointer object-cover' />
  
    <div className='absolute bottom-4 left-4 bg-white rounded-full p-1  flex items-center gap-1 text-xs cursor-pointer'>
        <Soup size={"16"} />{recipe.yield} Servings
    </div>
    <div className='absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
        <Heart size={"18"} className="hover:fill-red-500 hover:text-red-500"/>
    </div>
    </a>
    <div className='mt-1 flex'>
        <p className='font-bold tracking-wide'>{recipe.label}</p>
    </div>
    <p className='my-2'> {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)}Kitchen</p>
    <div className='flex gap-2 mt-auto'>
        { healthLabels.map((label, index)=>(
        <div key={index} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-semibold'> {label} </span>
        </div>
 ))}
       
    </div>
</div>
  )
}

export default RecipeCard
