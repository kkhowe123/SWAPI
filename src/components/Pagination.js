import React from "react";
import nextIcon from "../assets/nav_arrow.svg"
import prevIcon from "../assets/nav_arrowL.svg"

export default function Pagination({setPageValue, nextPage, prevPage, currentPage}){

  
  //This function is responsible for passing the variable to the parent calss to update the  current page
  function handleClick(pageNum)
  {
    return(pageNum);

  }


  // //This function is responsible for passing the variable to the parent calss to update the  current page but in an incrimented way. This aid with the function of the next button 
  function handleNext(activePage){
      return(activePage + 1)
  }

  function handlePrev(activePage)
  {
    return (activePage - 1)

  }

    const paginationNumbers = [];

    for (let i = 1; i <= 9; i++) {
        paginationNumbers.push(i);
      }
    
  return (
    <div className=" w-[500px]">
      
     <button className="inline" onClick={() =>{prevPage(handlePrev(currentPage))}} disabled={currentPage === 1}><img className="w-[20px] h-[20px] " src={prevIcon} /></button>
  

      {
        
      paginationNumbers.map((pageNumber) => (
        <button class="w-[36px] border-[1px] rounded-[4px] border-[#B8B8B8] bg-[#B8B8B8] ml-[2px]" key={pageNumber} onClick={()=>setPageValue(handleClick(pageNumber))}> {pageNumber}</button>
      ))
    
        
      }
      <button className="inline" onClick={() =>{nextPage(handleNext(currentPage))}} disabled={currentPage === 9} > <img className="w-[20px] h-[20px] " src={nextIcon} /> </button>  
     
    </div>
  );

}