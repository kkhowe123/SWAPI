import { useEffect, useState} from "react";
import React from "react";
import axios from "axios";
import CardDetails from './CardDetails';
import AllCardsDetailsView from "./AllCardsDetailsView";
import Pagination from "./Pagination";
import pageLoader from "../assets/loader.gif";
 const PeopleDetails = ({search}) =>{

    const [peopleData, setPeopleData] = useState([]);
    // const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [morePagesStatus, setMorePagesStatus] = useState(false);
    
  
        






    /*This useEffect below will be responsible for updating the page when we click the next and previous dbutton and the page nummbers . It also set a timeout to allow the loading animation to display*/
        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 600);

        },[currentPage]);

        useEffect( () =>
        {
            
            fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
            .then (response => {
                if(!response.ok){
                    // this will throw an error if we are unable to connect to the server
                    throw new Error ("Could not connect to the server");
                }
                return response.json();
            
            })
            .then(data => {
                setPeopleData(data.results)
                // this  set the total page numbers for the pagination 
                setTotalPages (Math.ceil(data.count/10))
            })
            
            
                       
            .catch (error => setError(error));
             

        
         // the current page variable below will be used to trigger the useEffect so each time the current page value changes the useEffect will run  
        },[currentPage]);

        
        useEffect( () =>
        {
            
            fetch(`https://swapi.dev/api/people/?search=${search}`)
            .then (response => {
                if(!response.ok){
                    // this will throw an error if we are unable to connect to the server
                    throw new Error ("Could not connect to the server");
                }
                return response.json();
            
            })
            .then(data => {
                setPeopleData(data.results)
                // this  set the total page numbers for the pagination 
                setTotalPages (Math.ceil(data.count/10))
            })
            
            
                       
            .catch (error => setError(error));
             

        
         // the current page variable below will be used to trigger the useEffect so each time the current page value changes the useEffect will run  
        },[search]);


        //this function is used to update the morepages states and show the other pages 
        function setMorePages(pageStatus)
        {
            return(setMorePagesStatus(pageStatus))

        }

        // function is used to update the crrent page state to allow switince of pages this will be pased to the Pagination component 
        function setPage(selectedPage)
        {
            return(setCurrentPage(selectedPage))
        }
            // this is used to to update the current page state this will allow switching pages using the next button this function will be passed to the pagination component 
        const nextPage = (activePage) => {
            setCurrentPage(activePage);
          };
        // this is used to to update the current page state this will allow switching pages using the previous  button this function will be passed to the pagination component 
          const prevPage = (activePage) => {
            setCurrentPage(activePage);
          };
        return(
            <>
            {/*  The below is responsible for rendering the card details to the screen. This is also responsible for the loading screen animation */}
               {loading ? (
                <div>
                    <img className="ml-[500px] mt-[100px]"  src={pageLoader} />
                </div>
               ) :( 
                <>
                {peopleData.filter((item) =>{
                    return(search.toLowerCase()===''? item:
                    item.name.toLowerCase().includes(search)
                    );
                } ).map((people) => (
                //all card details view componenet below to display the details for each card 
                <AllCardsDetailsView key={people.name} peopleData={people} />
            ))}
            

    <div>
    {/* Using the pagination component to  display the the page numbers and also the next button*/}
    <Pagination setPageValue={setPage} nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} setMorePagesStatus={setMorePages} morePagesStatus={morePagesStatus}  totalPages={9}/>

</div>
</>
            )



               }
      
           
            </>
        );
        
        }
         export default PeopleDetails