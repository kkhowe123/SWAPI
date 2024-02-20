import React from "react";
import PeopleDetails from "./PeopleDetails";
import card from "../assets/Card.svg"; 
import plus from "../assets/plus.svg"
export default function AllCardsDetailsView({name, birth_year,species,homeworld,vehicles,starships})
{



    return(
      
      <div>
        <div className="w-[216px] h-[98px] bg-[#969696] rounded-t-[8px] mr-[20px]">
            <div className="flex">
            <img className="ml-[18px] mt-[16px] w-[16px] h-[16px] bg-transparent fill-none outline-white" src={card} alt="Card Icon" />
            <div className="bg-white w-[36px] h-[32px] pt-[10px] pl-[8px] rounded-[4px] ml-[130px] mt-[16px]">
            <img className="w-[15px] h-[15px]" src={plus} alt="Plus Icon" />
            </div>
            </div>
            <h4 className="ml-[18px] mt-[20px] mb-[10px] " >{name}</h4>
            
        </div>

        <div>
<<<<<<< HEAD

        <div className="flex justify-between pt-[2px] pb-[2px] mt-[2px] mb-[10px] bg-[#EDEDED] rounded-[4px] w-[184px] h-[32px]">
          <img className="w-[16px] h-[16px] mt-[3px] ml-[6px]" src={homeworldIcon} alt="homeworld icon" />
          <h4 className="text-[12px] ml-[-20px] mt-[3px]">Homeworld</h4> 
          <h4 className="text-[12px] pr-[5px] pt-[3px]">Homeworld</h4>
=======
        <h4>{birth_year}</h4>
>>>>>>> parent of 58ecf75c (Modified the  all cards design)
       
        </div>

        <div>
       <h4>{name}</h4>
        {/* <h4>{vehicles}</h4> <h4>{name}</h4>
        <h4>{starships}</h4> <h4>{name}</h4> */}
        </div>
        

      </div>
        
    );

     



}