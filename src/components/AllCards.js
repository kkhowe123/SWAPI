import React from "react";
import HomeLayout from "./HomeLayout";
import navArrow from "../assets/nav_arrow.svg";
import Search from "./Search";
import Sort from "./Sort";
import { useState } from "react";
import PeopleDetails from "./PeopleDetails";
export default function AllCards (){
    
    const [search, setSearch] = useState("");
    
    //This function is used to update the setSearch state and will be passed to the Search component
    function updateSearch(searchData){
     return setSearch(searchData);

    }

    return (
        <>
        <HomeLayout />
        <div className="mt-[48px]" >
        <div className="flex mt-[10px] ml-[90px]">
        <h6>All Cards</h6>
        <img className="w-[16px]" src={navArrow} alt="nav arrow"/>
        <h6>Select A Card</h6>
        </div>

        <div className="mt-[40px] ml-[90px] flex">
            <Search setData = {updateSearch} />    
            <Sort />
        </div>    
        <div className="flex flex-wrap ml-[90px] mt-[24px]">
        
        <PeopleDetails search={search} />
        </div>
        </div>
        
        </>
    );
}