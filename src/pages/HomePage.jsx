import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../lib/utils';

const App_ID = "9e675a0d";
const App_KEY = "3f99709798100c386356ce522d05cfb3";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("chicken"); // to handle search input

    const fetchRecipes = async (query) => {
        setLoading(true);
        setRecipes([]);

        try {
            const res = await fetch(
                `https://api.edamam.com/api/recipes/v2?app_id=${App_ID}&app_key=${App_KEY}&q=${query}&type=public`
            );
            const data = await res.json();
            setRecipes(data.hits);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes(searchQuery);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchRecipes(searchQuery);
    };

    return (
        <div className="bg-[#efeded] p-10 flex-1 rounded-md">
            <div className="max-w-screen-lg mx-auto">
                <form onSubmit={handleSearch}>
                    <label className='input shadow-md flex items-center gap-2'>
                        <Search size={"24"} />
                        <input
                            type="text"
                            className='text-sm md:text-md grow'
                            placeholder='What do you want to cook today?'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </label>
                </form>

                <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipe</h1>
                <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>
                    Popular Choices
                </p>

                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {!loading && recipes.map(({ recipe }, index) => (
                        <RecipeCard key={index} recipe={recipe} 
                        {...getRandomColor()}/>
                    ))}

                    {loading && [...Array(9)].map((_, index) => (
                        <div key={index} className="flex w-full flex-col gap-4">
                            <div className="skeleton h-32 w-full "></div>
                            <div className="skeleton h-4 w-2/3"></div>
                            <div className="flex justify-between">
                                <div className="skeleton h-4 w-1/2"></div>
                                <div className="skeleton h-4 w-2/5"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
