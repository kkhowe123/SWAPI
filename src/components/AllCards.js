import React from "react";
import HomeLayout from "./HomeLayout";
import navArrow from "../assets/nav_arrow.svg";
import Search from "./Search";
import Sort from "./Sort";
import PeopleDetails from "./PeopleDetails"
import AllCardsDetailsView from "./AllCardsDetailsView";
export default function AllCards (){
    



    return (
        <>
        <HomeLayout />
        <div className="mt-[28px]" >
        <div className="ml-[28px] md:ml-[189px] flex mt-[10px] lg:ml-[90px]">
        <h6>All Cards</h6>
        <img className="w-[16px]" src={navArrow} alt="nav arrow"/>
        <h6>Select A Card</h6>
        </div>

        <div className=" ml-[28px] mt-[40px] lg:ml-[90px] flex md:ml-[189px]">
            <Search />    
            <Sort />
        </div>    
        <div className="md:ml-[189px] md:flex flex-wrap ml-[90px] mt-[24px]">
        {/* <PeopleDetails /> */}
        </div>
        </div>
        
        </>
    );
}