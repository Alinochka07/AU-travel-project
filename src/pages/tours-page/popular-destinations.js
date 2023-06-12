import React from "react";
import "./popular-destinations.css";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";


function PopularDestinations({tours}){

    const navigate = useNavigate()
   

    const onClick = () => {
         return navigate('/all-popular-destinations') 
    }
    if(tours) {
        const popTours = Object.entries(tours);
       
        return (
                <div className="popular-destinations">
                <h3>Популярные направления</h3>
                    <div className="popular-blocks">
                            {popTours.filter(tour => tour[1].popular === true).map(filteredTour => {
                                return <div key={filteredTour[1].id} className="pop-block">
                                            <img alt="au-travel-agency" src={filteredTour[1].image} style={{width: '370px', height: '270px'}}></img>
                                            <div className="info-block">
                                                <div className="info"><h6>{filteredTour[1].destination}</h6></div>
                                                <span className="reviews">
                                                    <span>$ {filteredTour[1].price}</span>
                                                    <button type="button" className="btn btn-link">
                                                        <span className="bi bi-star-fill"></span>
                                                        <span className="bi bi-star-fill"></span>
                                                        <span className="bi bi-star-fill"></span>
                                                        <span className="bi bi-star-fill"></span>
                                                        <span className="bi bi-star-fill"></span>
                                                    </button>
                                                    50 отзывов
                                                    <button className="btn btn-outline reviews-check-out">+</button>
                                                </span>
                                                
                                            </div>
                                        </div>
                                })
                            }
                        
                    </div>
                    <div>
                        <button onClick={onClick} className="btn btn-outline all-popular-destinations">Все популярные направления!</button>
                    </div>
            </div>
        ) 
    } else {
        return <div>Пожалуйста, подождите...</div>
    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.firestore.data.tours
        
    }
    }
    
export default compose(connect(mapStateToProps), firestoreConnect())(PopularDestinations);