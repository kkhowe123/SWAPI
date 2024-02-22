export default function Pagination({setPageValue}){

  function handleClick(pageNum)
  {
    return(pageNum);

  }

    const paginationNumbers = [];

    for (let i = 1; i <= 9; i++) {
        paginationNumbers.push(i);
      }
    
  return (
    <div className=" w-[344px]">
      {
        
      paginationNumbers.map((pageNumber) => (
        <button class="w-[36px] border-[1px] rounded-[4px] border-[#B8B8B8] bg-[#B8B8B8] ml-[2px]" key={pageNumber} onClick={()=>setPageValue(handleClick(pageNumber))} >{pageNumber}</button>
      ))
    
        
      }  
     
    </div>
  );

}