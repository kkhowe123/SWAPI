import card from "../assets/Card.svg";
import deck from "../assets/Deck.svg";
import React from "react";
export default function HomeLayout (){


return(
   
    <>
    <div className="mt-[62px] ml-[90px]">
    <div className="flex justify-between w-[1176px] h-[32px] g-[16px]" > 
    
    <div className="w-[212px] h-[32px] " >
        <button className="w-[112px] h-[32px] rounded-[4px] bg-[#FFFFFF] text-[16px]" > <img className="w-[16px] h-[16px] top-[0.5px] left[2.5px] inlines" src={card} alt="card icon" /> All Cards </button>


        <button className="ml-[8px] w-[92px] h-[32px] rounded-[4px] bg-[#E4E4E4] " >
            <img className="inline w-[18px] h-[16px] top-[0.5px] left[2.5px] mr-[8px]" src={deck} alt="Deck Icon"/>
            
            Decks</button>
    </div>
    <p>SW-API Deck Builder</p>
    <p className="border-[1px] w-[129px] h-[32px] rounded-[4px] px-[12px] py-[2px] border-[#B8B8B8]" ><h6 className="w-[105px] h-[16px] text-[16px] text-center">Keanu Howe</h6></p>

    </div>
    <hr className="w-[1176px] h-[2px] border-2 border-[#B8B8B8] mt-[10px]"/>
    
    </div>
    
    </>
    

);



}