import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounde-md bg-[#ecf7d4] overflow-hidden p-3 relative'>
    <a href="#" className='relative h-32'>
        <img src="/1.jpg" alt="recipe-image" className='rounded-md w-full h-full cursor-pointer object-cover' />
  
    <div className='absolute bottom-4 left-4 bg-white rounded-full p-1  flex items-center gap-1 text-xs cursor-pointer'>
        <Soup size={"16"} />4 Servings
    </div>
    <div className='absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer'>
        <Heart size={"18"} className="hover:fill-red-500 hover:text-red-500"/>
    </div>
    </a>
    <div className='mt-1 flex'>
        <p className='font-bold tracking-wide'>Veg Thali</p>
    </div>
    <p className='my-2'> Indian Kitchen</p>
    <div className='flex gap-2 mt-auto'>
        <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-semibold'> Gluten-free </span>
        </div>
        <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
            <HeartPulse size={16} />
            <span className='text-sm tracking-tighter font-semibold'> Heart-healthy </span>
        </div>
    </div>
</div>
  )
}

export default RecipeCard


// import { HeartPulse, Soup, Heart } from "lucide-react"

// const getTwoValueFromArray = (arr) => {
//   return [arr[0], arr[1]];
// }
// const RecipeCard = ({ recipe,bg,badge }) => {
//   const healthLabels = getTwoValueFromArray(recipe.healthLabels);
//   // const healthLabels = recipe.healthLabels;

//   const addRecipeToFavourite = ()=>{
//     let favourites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const isRecipeAlreadyInFavorites
//   }
//   return (
//     <div className={` flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
//       <a
//         hef={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
//         target="_blank"
//         className=" relative h-32">
//         <img
//           src={recipe.image}
//           alt="recipe img"
//           className="rounded-md w-full h-full object-cover cursor-pointer " />
        
//         <div className="absolute left-2 bottom-2 bg-white rounded-full px-2 py-1 cursor-pointer flex items-center text-xs gap-1  md:text-sm">
//           <Soup size={14} /> {recipe.yield} Serving
//         </div>

//         <div className=" absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer "
//         onClick={(e)=>{
//           e.preventDefault();
//           addRecipeToFavourite()
//         }}>
//           <Heart size={14} className=" hover:fill-red-500 hover:text-red-500" />
//         </div>

//       </a>

//       <div className="flex mt-1">
//         <p className="font-bold tracking-wide">{recipe.label}</p>
//       </div>
//       <p className=" my-1 sm:text-sm capitalize ">{recipe.cuisineType} Kitchen </p>
//       <div className=" flex gap-2 mt-auto">

//         {healthLabels.map((label, idx) => (
//           <div key={idx} className={`flex gap-1 rounded-md ${badge} items-center p-1`}>
//             <HeartPulse size={14} />
//             <span className="text-xs tracking-tighter font-semibold md:text-sm"> {label}</span>
//           </div>
//         ))}


//       </div>


//     </div>


//   )
// }

// export default RecipeCard