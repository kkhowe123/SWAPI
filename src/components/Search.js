import React from "react";
import search from "../assets/Search.svg";

export default function Search(){

return(

    <div>
        <div className="relative">
        
        <input className="rounded-[4px] w-[352px] h-[32px] pl-[8px]" placeholder="Search" />
        <div className="absolute  inset-y-0 left-60 ml-20   
                    flex items-center  
                    pointer-events-none">
        <img src={search} alt="Serach icon"/>

        </div>
        </div>

    </div>
);

}