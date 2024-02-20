import card from "../assets/Card.svg";
import deck from "../assets/Deck.svg";
import React from "react";
export default function HomeLayout (){


return(
   
    <>
    <div className="w-[358px] h-[50px] mt-[24px] mr-[28px] ml-[28px] md:mt-[64px] md:ml-[189px] md:w-[456px]  lg:mt[62px] lg:w-[1176px] lg:ml-[90px] ">
    <div className=" flex justify-between w-[358px] h-[32px] md:w-[456px] lg:mt[62px] lg:w-[1176px]  " > 
    
<<<<<<< HEAD
    <div className=" w-[212px] h-[32px] gap-[8px] " >
        <button className="w-[112px] h-[32px] rounded-[4px] bg-[#FFFFFF] text-[16px] gap-[10px]" > <img className=" inline" src={card} alt="card icon" /> All Cards </button>
=======
    <div className="w-[212px] h-[32px] " >
        <button className="w-[112px] h-[32px] rounded-[4px] bg-[#FFFFFF] text-[16px]" > <img className="w-[16px] h-[16px] top-[0.5px] left[2.5px] inlines" src={card} alt="card icon" /> All Cards </button>
>>>>>>> parent of 58ecf75c (Modified the  all cards design)


        <button className=" w-[92px] h-[32px] rounded-[4px] bg-[#E4E4E4] ml-[8px] " >
            <img className="inline" src={deck} alt="Deck Icon"/>
            
            Decks</button>
    </div>
    <p className="hidden lg:inline" >SW-API Deck Builder</p>
    <p className="w-[129px] h-[32px] border-[1px] border-[#B8B8B8] rounded-[4px] px-[12px] py-[2px] " ><h6 className="text-[16px] text-center">Keanu Howe</h6></p>

    </div>
    <hr className="w-[358px] mt-[15px] h-[2px] border-2 border-[#B8B8B8] md:w-[456px] lg:mt[62px]  lg:w-[1176px]"/>
    
    </div>
    
    </>

);



}