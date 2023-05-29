import React, {useState, useEffect} from "react";
import "../../components/popular-destinations/popular-destinations.css"
import batumi from "../../img/web-photos/batumi.jpeg";
import istanbul from "../../img/web-photos/istanbul.jpeg";
import abu_dabi from "../../img/web-photos/abu-dabi.jpeg";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {db} from "../../index"
import {getFirestore} from "redux-firestore"
import 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Link } from "react-router-dom";
import AllPopularDestinations from "./AllPopularDestinations";


function PopularDestinations({tours}){

    const navigate = useNavigate()
    const {id} = useParams()

    // const [firstTour, setFirstTour] = useState()
    // const [secondTour, setSecondTour] = useState()
    // const [thirdTour, setThirdTour] = useState()

    // useEffect(() => {
    //     const getTours = async () => {
    //             const db = firebase.firestore()
    //             const tourRef = db.collection('tours');
    //             const snapshot = await tourRef.where('popular', '==', 'true').get();
    //             if (snapshot.empty) {
    //             console.log('No matching documents.');
    //             return;
    //             }
    //             let populars;
    //             snapshot.forEach(doc => {
    //                 populars = doc.data();
    //                 if(populars.destination === 'Грузия, Батуми') {
    //                     setFirstTour(populars.price)
    //                 } if(populars.destination === 'Турция, Анталия') {
    //                     setSecondTour(populars.price)
    //                 } if(populars.destination === 'Объединенные Арабские Эмираты, Абу-Даби') {
    //                     setThirdTour(populars.price)
    //                 } 
                    
    //             })
                
                
    //     }
    //     getTours();
    // }, [])

    // useEffect(() => {
    //     tours && tours.map(tour => {
    //         console.log(tour)
    //         return tour
    //     })
    //     const popular_tours = tours.filter(poptour => {
    //         return poptour.popular === 'true';
    //       });
    //       console.log(popular_tours)
    //     //   setPopularTour(popular_tours)
    //     //   console.log(popularTour)
    // }, [])

    
    // const [popTours, setPopTours] = useState(tours)

    
    // async function Populars() {
    //     tours.filter((poptour) => {
    //         poptour.popular === 'true'
    //     })
    // }

    // useEffect(() => {
    //     Populars()
    // },[])
   
    // const filteredTours = () => {
    //     const popular_tours = popTours.data.filter((poptour) => poptour.popular === 'true')
    //     console.log(popular_tours)
    // }
    // filteredTours()

    // let newTours = []
    // const getTours = () => {
    //     tours && tours.filter(tour => tour.popular === true).map(filteredTour => {
    //         newTours = filteredTour
    //     })
        
    // }
    
    // useEffect(() => {
    //     getTours()
    // }, [])
    
    
    const [populartours, setPopularTours] = useState();

    

    useEffect(() => {
        const setItems = () => {
            setPopularTours(tours)
        }
        setItems()
    }, [])

    const onClick = () => {
        return navigate('/all-popular-destinations')
    }
    if(tours) {
        
        return (
                <div className="popular-destinations">
                <h3>Популярные направления</h3>
                    <div className="popular-blocks">
                            {tours && tours.filter(tour => tour.popular === true).map(filteredTour => {
                                return <div key={filteredTour.id} className="pop-block">
                                            {/* <div id="triangle-left"></div> */}
                                            {/* <div id="triangle-right"></div> */}
                                            <img alt="au-travel-agency" src={filteredTour.image} width="290px" height="350px"></img>
                                            <div className="info-block">
                                                <div className="info"><h6>{filteredTour.destination}</h6></div>
                                                <span className="reviews">
                                                    <span>$ {filteredTour.price}</span>
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
        return null
    }
}

export default PopularDestinations;
// const mapStateToProps = (state) => {
//     return {
//         tours: state.firestore.data.tours
//     }
//     }
    
// export default compose(connect(mapStateToProps), firestoreConnect())(PopularDestinations);