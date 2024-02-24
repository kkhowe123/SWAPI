import { useEffect, useState} from "react";
import CardDetails from './CardDetails';
import AllCardsDetailsView from "./AllCardsDetailsView";
import Pagination from "./Pagination";
import pageLoader from "../assets/loader.gif"
 const PeopleDetails = () =>{

    const [peopleData, setPeopleData] = useState([]);
    // const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)
            }, 1700);
        },[currentPage]);

        useEffect( () =>
        {
            fetch(`https://swapi.dev/api/people/?page=${currentPage}`)
            .then (response => {
                if(!response.ok){
                    throw new Error ("Could not connect to the server");
                }
                return response.json();
            
            })
            .then(data => {
                setPeopleData(data.results)
                setTotalPages (Math.ceil(data.count/10))
            })
            
            
                       
            .catch (error => setError(error));
             

        
           
        },[currentPage]);

        function setPage(selectedPage)
        {
            return(setCurrentPage(selectedPage))
        }

        const nextPage = (activePage) => {
            setCurrentPage(activePage);
          };
        
          const prevPage = (activePage) => {
            setCurrentPage(activePage);
          };
        return(
            <>
               {loading ? (
                <div>
                    <img className="ml-[500px] mt-[100px]"  src={pageLoader} />
                </div>
               ) :( 
                <>
                {peopleData.map((people) => (
                
                <AllCardsDetailsView key={people.name} name={people.name} birth_year ={people.birth_year} species={people.species} homeworld={people.homeworld} vehicles={people.vehicles} starships ={people.starship} gender={people.gender} />
            ))}
            

    <div>
    <Pagination setPageValue={setPage} nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} />

</div>
</>
            )



               }
      
           
            </>
        );
        
        }
         export default PeopleDetails