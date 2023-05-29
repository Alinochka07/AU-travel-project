import React from 'react';
import TourDetails from './tour-details';
import { Link } from 'react-router-dom';
import Allpopulardestinations from './AllPopularDestinations';
import SearchFunction from '../../components/search';




export default function TourList({tours}) {
  return (
    <div>
      {tours && tours.map(tour => {
        return (
            <Link to={`/tour/${tour.id}`}>
                <TourDetails tour={tour} key={tour.id}/>
                <Allpopulardestinations tours={tours} key={tour.id}/>
                <SearchFunction tour={tour} key={tour.id}/>
            </Link>
        )
      })}
    </div>
  )
}







