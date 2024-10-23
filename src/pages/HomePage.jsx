import { Search} from 'lucide-react'
import React from 'react'
import RecipeCard from '../components/RecipeCard'

const HomePage = () => {
    return (
        <div className="bg-[#efeded] p-10 flex-1 rounded-md">
            <div className="max-w-screen-lg mx-auto">
                <form>
                    <label className='input shadow-md flex items-center gap-2'>
                        <Search size={"24"} />
                        <input type="text" className=' text-sm md:text-md grow' placeholder='what do you want to cook today' />
                    </label>
                </form>

                <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipe </h1>
                <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
                    Popular Choices
                </p>

                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage

// import { Search } from "lucide-react"
// import RecipeCard from "../components/RecipeCard"
// import { useEffect, useState } from "react"

// const App_ID = "9e675a0d"
// const App_KEY = "3f99709798100c386356ce522d05cfb3"

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchRecipes = async (searchQuery) => {
//     setLoading(true);
//     setRecipes([]);

//     try {
//       const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${App_ID}&app_key=${App_KEY}&q=${searchQuery}&type=public`);
//       const data = await res.json();
//       setRecipes(data.hits);
//       console.log(data.hits)

//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setLoading(false)
//     }
//   };


//   useEffect(() => {
//     fetchRecipes("chicken");
//   }, []);

//   return (
//     <div className="bg-[#efeded] p-10 flex-1">
//       <div className="max-w-screen-lg mx-auto">
//         <form>
//           <label className="input shadow-md flex items-center gap-2">
//             <Search size={"24"} />
//             <input type="text" className=" text-sm md:text-md grow"
//               placeholder="What do You make " />
//           </label>
//         </form>
//         <p className=" font-bold text-2xl md:text-4xl mt-4" >Recommended Recipes</p>
//         <p className=" text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

//         <div className=" grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-col-4">

//         {!loading && recipes.map(({recipe},index)=>(
//           <RecipeCard key={index} recipe={recipe} {...getRandomColor()}
//           />
//         ))}

//           {loading &&
//             [...Array(9)].map((_, index) => (
//               <div key={index} className="flex w-full flex-col gap-4">
//                 <div className="skeleton h-32 w-full "></div>
//                 <div className="skeleton h-4 w-2/3"></div>
//                 <div className="flex justify-between">
//                   <div className="skeleton h-4 w-1/2"></div>
//                   <div className="skeleton h-4 w-2/5"></div>
//                 </div>
//               </div>
//             ))}

//         </div>
//       </div>
//     </div >
//   )
// }

// export default HomePage