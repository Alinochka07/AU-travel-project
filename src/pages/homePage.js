import React, { useEffect, useMemo } from "react";
import "../App.css";
import MainHeader from "../components/1_main-header";
import BoxMenu from "../components/3_middle-box-menu";
import TopDestinations from "../components/top-destinations";
import ServiceBlock from "../components/services-block";
import PopularDestinations from "../pages/tours-page/popular-destinations";
import FooterInstaBlock from "../components/footer-insta";
import Footer from "../components/footer/footer";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Destination from "./tours-page/destination";



function HomePage(props) {

    const { tours } = props;

    useEffect(() => {

      }, [tours]); 
    
    const memoizedTours = useMemo(() => {
        return tours;
    }, [tours]); 

    
        return(
            <div>
                <div className="container">
                    <MainHeader/>
                    <Destination tours={memoizedTours}/>
                    <BoxMenu/>
                    <TopDestinations tours={memoizedTours}/>
                    <ServiceBlock/>
                    <PopularDestinations tours={memoizedTours}/>
                    <FooterInstaBlock/>
                    <Footer/>
                </div>
            </div> 
        )
    }


const getDerivedStateFromProps = (state) => {
    return {
        tours: state.firestore.ordered.tours
        // tours: state.tour.tours // this is used for not Firebase connection
    }
}


export default compose(
    firestoreConnect(['tours']),
    connect((getDerivedStateFromProps))
    )(HomePage);


