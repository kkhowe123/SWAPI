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
    <div class="bg-white w-96 mt-10 ml-10 border-2 border-gray-200 rounded-md" key ={people.name}>
        <div class="bg-cardBG h-20 text-white">
        <img src={card} alt="Card logo" className="fill-white" />
        <h4>{people.name}</h4>
        </div>
        
        <ul>
        <li ><img className="inline " src={ people.gender === 'male' ? male : female }alt="gender" /> <h4 className="inline m">{people.gender} </h4></li>

        <li> {people.species}</li>
        <hr/>

        <li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 pl-1 border-gray-100'> <img src={homeWorld} alt="homeworld" className="inline"/>HomeWorld <h4 className="inline">{people.homeworld}</h4></li>
        <li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={vehicle} alt="vehicle" className="inline"/>Vehicle<h4 className="inline">{people.vehicles}</h4></li>
        <li className='bg-cardDetailsBG mt-2 mb-2 rounded-md border-2 border-gray-100'> <img src={starShip} alt="starship" className="inline"/>Starship <h4 className="inline">{people.starships}</h4></li>
        </ul>

    </div>)

return(

<>
{peopleDetails}
</>

    
)


}