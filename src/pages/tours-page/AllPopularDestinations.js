import React from 'react'
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



export const AllPopularDestinations = ({tours}) => {

    if (tours) {
        const myTours = Object.entries(tours).map(tour => tour[1])
    
    return (
            <div className='container'>
                <div className="container section tour-details">  
                
                    { myTours && myTours.map(tour => {
                        return  <div className="jumbotron">
                                    <h5 className="display-4"> {tour.title} </h5> 
                                    <p className="lead"><FontAwesomeIcon icon={faLocationDot}/>  {tour.destination}</p>
                                    <hr className="my-4"></hr>
                                    <div className="travel-info">
                                        <p>Даты тура: {tour.dates} <br></br>
                                            {tour.details}<br></br>
                                            Стоимость на одного взрослого от:<strong> $ {tour.price}</strong>
                                        </p>
                                    </div>
                                    <div className="images">
                                        <div className="image-list">
                                            <div className="img">
                                                <img className="img-fluid" alt="au-travel" width="650px" height="540px" 
                                                    src={tour.image}>
                                                </img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        })}
                </div>
            </div>
    )
    } else {
        <div className='container section tour-details'>Информация по данному туру загружается, пожалуйста подождите...</div>
    }
    

}



const mapStateToProps = (state) => {
    return {
        tours: state.firestore.data.tours

    }
}
    
export default compose(
    connect(mapStateToProps), firestoreConnect()
    )(AllPopularDestinations);
