import React from "react";
import search from "../assets/Search.svg";

export default function Search({setData}){

   
   // this function is responsible for updating the search value for that will be entered by the user...This will be passed to the parent component to be used in the set search function 
    function handleChange(serachValue)
    {
        return(serachValue);
    }

return(

    <div>
        <div className="relative">
        
        <input className="rounded-[4px] w-[352px] h-[32px] pl-[8px]" placeholder="Search"  
        // the oncChnage is responsible for updating the value to be sent to the handleChange function each time the user enters a value 
        onChange={(e) =>setData(handleChange(e.target.value))}/>
        <div className="absolute  inset-y-0 left-60 ml-20   
                    flex items-center  
                    pointer-events-none">
        <img src={search} alt="Serach icon"/>

        </div>
        </div>

    </div>
);

}