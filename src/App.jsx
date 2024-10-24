import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 p-2 lg:p-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
