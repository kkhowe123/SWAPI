import React from "react";
import HomeLayout from "./HomeLayout";
import navArrow from "../assets/nav_arrow.svg";
import Search from "./Search";
export default function AllCards (){
    



    return (
        <>
        <HomeLayout />
        <div className="mt-[48px]" >
        <div className="flex mt-[10px] ml-[90px]">
        <h6>All Cards</h6>
        <img className="w-[16px]" src={navArrow} alt="nav arrow"/>
        <h6>Select A Card</h6>
        </div>

        <div className="mt-[40px] ml-[90px]">
            <Search />    
        </div>    

        </div>
        
        </>
    );
}