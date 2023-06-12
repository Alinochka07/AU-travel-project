import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



const AllPopularDestinations = ({tours}) => {

    if (tours) {
        const myTours = Object.entries(tours).map(tour => tour[1])
    
    return (
            <div className='container'>
                <div className="container section tour-details">  
                    { myTours && myTours.filter((tour) => (tour.popular === true)).map(popular => {
                        return  <div key={popular.id}>
                                    <div className="jumbotron">
                                        <h5 className="display-4"> {popular.title} </h5> 
                                        <p className="lead"><FontAwesomeIcon icon={faLocationDot}/>  {popular.destination}</p>
                                        <hr className="my-4"></hr>
                                        <div className='jumpotron-tour-info'>
                                            <div className="travel-info">
                                                <p>Даты тура: {popular.dates} <br></br>
                                                    {popular.details}<br></br>
                                                    Стоимость на одного взрослого от:<strong> $ {popular.price}</strong>
                                                </p>
                                            </div>
                                            <div className="images">
                                                <div className="image-list">
                                                    <div className="img">
                                                        <img className="img-fluid" alt="au-travel" width="650px" height="540px" 
                                                            src={popular.image}>
                                                        </img>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                <hr></hr>
                                </div>
                        })}
                </div>
            </div>
    )
    } else {
        return <div className='container section tour-details'>Информация по популярным турам загружается, пожалуйста подождите...</div>
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
