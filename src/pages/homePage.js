import React from "react";
import "../App.css";
import MainHeader from "../components/1_main-header";
import BoxMenu from "../components/3_middle-box-menu";
import TopDestinations from "../components/top-destinations";
import ServiceBlock from "../components/services-block";
import PopularDestinations from "../components/popular-destinations";
import FooterInstaBlock from "../components/footer-insta";
import Footer from "../components/footer/footer";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Destination from "./tours-page/destination";



function HomePage(props) {

    const { tours } = props;
        return(
            <div>
                <div className="container">
                    <MainHeader/>
                    <Destination tours={tours}/>
                    <BoxMenu/>
                    <TopDestinations tours={tours}/>
                    <ServiceBlock/>
                    <PopularDestinations tours={tours}/>
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


