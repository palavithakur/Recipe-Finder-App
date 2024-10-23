import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const fav= true;
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">  My Favorites</p>
          
          {!fav && ( 
            <div className="h-[80vh] flex flex-col items-center gap-4">
              <img src='/404.svg' className="'h-3/4 " alt="404 svg"/>
            </div>
          )}

          {fav && (
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <RecipeCard/>
            </div>
          )}
      
      </div>
    </div>
  )
}

export default Favorites
