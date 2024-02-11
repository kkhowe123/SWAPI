import { useEffect, useState } from "react";
 export default function PeopleDetails(){

    const [peopleData, setPeopleData] = useState([]);
    const [error, setError] = useState(null);
    const totalPerson =10;
        

        useEffect( () =>{
            //using aysnc to allow the program to get 10 persons from the api 
            const getPeopleDetails =  async () => {
                //using try for erro handling 
                try{
                    //using promises to store all the data retrieved after all the API pull is completed Array.from is used to create a new shallow copy array using the details we get from the api 

                    const promises = Array.from({length: totalPerson},(_,index)=>
                    fetch(`https://swapi.dev/api/people/${index +1}/`)
                    .then(response =>
                        {
                            //check to see if we were able to reach the AOI and the connection was good. If the app could not connect to the api It will throw the error 
                            if(!response.ok)
                            {throw new Error("Could not reach Swapi");
                        }
                        //returning the fdata as json
                        return response.json();
                        }
                        )
                    );  
                    
                    //created fetchedPeople to save all the data that was fecteched from the server. this will be passed to the setPeopleData to update the state.
                    const fetchedPeople = await Promise.all(promises);
                    setPeopleData(fetchedPeople);
                } 

                //now we will catch the error 
                catch(error){
                    setError(error);
                }

            };
            //calling the get perople details
            getPeopleDetails();
            //below the totalPersons is use to control the useEffect(make it execute if the value change...let say we need to pull 11 peroson instead of 10... the total person would be updated and the useEffect will execute again) 
        },[totalPerson]);
    
    
        return (
            <div>
               
                {error ? (
                    <div>Error: {error.message}</div>
                ) : (
                    peopleData.length > 0 ? (
                        <div>
                            {peopleData.map(person => (
                                <div key={person.name}>
                                    <h3>Name: {person.name}</h3>
                                    <p>Height: {person.height}</p>
                                    <p>Birth Year: {person.birth_year}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )
                )}
            </div>
        );
                    }