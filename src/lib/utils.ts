import { Badge } from "lucide-react";

const COLORS = {
    green: {
       bg: "bg-[#ECF7D4]",
        badge:"bg-[#d6f497]"
    },
    orange:{
        bg: "bg-[#f9efe1]",
        badge : "bg-[#f7e088]"
    },
    red:{
        bg: "bg-[#FBE5E7]",
        badge: "bg-[#fdc6c7]",
    },
};

export const getRandomColor = () =>{
    const colorNames = Object.keys(COLORS);
    const randomIndex = Math.floor(Math.random()* colorNames.length);
    const randomColorName = colorNames[randomIndex];
    return COLORS[randomColorName]; 
};
