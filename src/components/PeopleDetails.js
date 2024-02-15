import { useEffect, useState} from "react";
import CardDetails from './CardDetails';
import AllCardsDetailsView from "./AllCardsDetailsView";
 const PeopleDetails = () =>{

    const [peopleData, setPeopleData] = useState([]);
    const [error, setError] = useState(null);
    // const totalPerson =10;
        const mydata =peopleData;

        useEffect( () =>
        {
            fetch('https://swapi.dev/api/people/')
            .then (response => {
                if(!response.ok){
                    throw new Error ("Could not connect to the server");
                }
                return response.json();

            })
            .then(data => setPeopleData(data.results)) 
            
            .catch (error => setError(error));

        },[]);
        return(
            <>
                {peopleData.map((people) => (
                
                    <AllCardsDetailsView key={people.name} name={people.name} birth_year ={people.birth_year} species={people.species} homeworld={people.homeworld} vehicles={people.vehicles} starships ={people.starships} />
                ))}
           
            </>
        );
        
        }
         export default PeopleDetails