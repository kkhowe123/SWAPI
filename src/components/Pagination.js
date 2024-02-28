import React from "react";
import nextIcon from "../assets/nav_arrow.svg"
import prevIcon from "../assets/nav_arrowL.svg"
import morePages from "../assets/morePages.svg"


export default function Pagination({setPageValue, nextPage, prevPage, currentPage, setMorePagesStatus, morePagesStatus, totalPages }){

  
  //This function is responsible for passing the variable to the parent calss to update the  current page
  function handleClick(pageNum)
  {
    return(pageNum);

  }


function handleMorePagesClick(active)
{
  if(active === true)
  {
 return( active = false)
  }
  else{
    return active = true; 
  }
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

    for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(i);
      }

      // this filter the first s5 numbers of the padination page number 
      const firstFive = paginationNumbers.filter((num) => num <=5 );
      
      //this filter the last  numbers of the pagination page numbers 
      const lastFour = paginationNumbers.filter((num) => num >= 6);



    
  return (
    <div className=" w-[500px]">
      
     <button className="inline" onClick={() =>{prevPage(handlePrev(currentPage))}} disabled={currentPage === 1}><img className="w-[20px] h-[20px] " alt="prevIcon" src={prevIcon} /></button>
  

      {
        
      firstFive.map((pageNumber) => (
        <button className="w-[36px] border-[1px] rounded-[4px] border-[#B8B8B8] bg-[#B8B8B8] ml-[2px]" key={pageNumber} onClick={()=>setPageValue(handleClick(pageNumber))}> {pageNumber}</button>
      ))}
      <button onClick={() => setMorePagesStatus(handleMorePagesClick(morePagesStatus)) } className=" w-[36px] border-[1px] rounded-[4px] border-[#B8B8B8] bg-[#B8B8B8] ml-[2px]">  <img className=" inline W-[36px] h-[20px]" alt="more pages Icon" src={morePages} /> </button>

        {

            lastFour.map((pageNumber) => (
             <button className={morePagesStatus ? "inline  w-[36px] border-[1px] rounded-[4px] border-[#B8B8B8] bg-[#B8B8B8] ml-[2px]": "hidden" }  key={pageNumber} onClick={()=>setPageValue(handleClick(pageNumber))}> {pageNumber}</button>
            ))

        }

      <button className="inline" onClick={() =>{nextPage(handleNext(currentPage))}} disabled={currentPage === 9} > <img className="w-[20px] h-[20px] " alt="next page icon" src={nextIcon} /> </button>  
     
    </div>
  );

}