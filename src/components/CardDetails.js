//This component is responsible for displaying the details of the people that is stored in cardData.js
//https://jakearchibald.github.io/svgomg/
import card from  '../assets/Card.svg'
import deck from  '../assets/Deck.svg'
import  female from  '../assets//Gender-Female.svg'
import male from  '../assets/Gender-Male.svg'
import homeWorld from  '../assets/Homeworld.svg'
import search from  '../assets/Search.svg'
import starShip from  '../assets/Starship.svg'
import vehicle from  '../assets/Vehicle.svg'

import { PEOPLE_DETAILS } from "../cardData"

export default function CardDetails(){

    const peopleDetails = PEOPLE_DETAILS.map((people) =>
    <div class="bg-white md:w-80 border-2 grid grid-cols-3 border-gray-200  rounded-md" key ={people.name}>
        <div class="bg-cardBG text-white">
        <img src={card} alt="Card logo" className=" p-2" />
        <h4 className='pl-2'>{people.name}</h4>
        </div>
        
        
        <div className='text-sm w-full items-center'>
        <img className="w-4" src={ people.gender === 'male' ? male : female }alt="gender" /> <h4 className="">{people.birth_year} </h4>
        <p className=''> {people.species}</p>
        </div>
    

        <hr/>

        
       

    </div>)
{/* <li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 pl-1 border-gray-100'> <img src={homeWorld} alt="homeworld" className="inline"/>HomeWorld <h4 className="inline">{people.homeworld}</h4></li>
<li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={vehicle} alt="vehicle" className="inline"/>Vehicle<h4 className="inline">{people.vehicles}</h4></li>
<li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={starShip} alt="starship" className="inline"/>Starship <h4 className="inline">{people.starships}</h4></li> */}
return(

<>
{peopleDetails}
</>

    
)


}