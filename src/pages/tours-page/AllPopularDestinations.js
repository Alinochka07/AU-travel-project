import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from '../../index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'



export const AllPopularDestinations = ({tours}) => {

    if (tours) {
        console.log(tours)
    
    return (
            <div className='container'>
                <div className="container section tour-details">  
                {/* { */}
                    {/* popularTours && popularTours.map(tour => { */}
                        {/* return ( */}
                            <div className="jumbotron">
                                {/* <h5 className="display-4"> {tour.title} </h5> 
                                <p className="lead"><FontAwesomeIcon icon={faLocationDot}/>  {tour.destination}</p> */}
                                <hr className="my-4"></hr>
                                <div className="travel-info">
                                    {/* <p>Даты тура: {tour.dates} <br></br>
                                        {tour.details}<br></br>
                                        Стоимость на одного взрослого от:<strong> $ {tour.price}</strong>
                                    </p> */}
                                </div>
                                <div className="images">
                                    <div className="image-list">
                                     
                                        {/* <div className="img"><img className="img-fluid" alt="au-travel" width="650px" height="540px" 
                                        // src={tour.image}
                                        >
                                            </img></div> */}
                                        
                                    </div>
                                </div>
                                
                            </div>
                        
                    {/* })  */}
                {/* } */}
                
                </div>
            </div>
    )
    }
    

}


// export default AllPopularDestinations;



const mapStateToProps = (state) => {
    return {
        tours: state.firestore.data.tours

    }
}
    
export default compose(
    connect(mapStateToProps), firestoreConnect()
    )(AllPopularDestinations);
