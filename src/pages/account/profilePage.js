import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../index";
import MainHeader from "../../components/1_main-header";
import ChooseDestinationOption from "../../components/2_choose-destination";
import BoxMenu from "../../components/3_middle-box-menu";
import TopDestinations from "../../components/top-destinations";
import ServiceBlock from "../../components/services-block";
import PopularDestinations from "../tours-page/popular-destinations";
import FooterInstaBlock from "../../components/footer-insta";
import Footer from "../../components/footer/footer";


export default function Profile() {

    return (
        <div>
            <div className="container">
                    <MainHeader/>
                    <ChooseDestinationOption/>
                    <BoxMenu/>
                    <TopDestinations/>
                    <ServiceBlock/>
                    <PopularDestinations/>
                    <FooterInstaBlock/>
                    <Footer/>
                </div>
            <div>
                {/* <h3>{`Привет, ${currentUser.displayName}`}</h3>

                <p>Ваш email: {currentUser.email}</p>
                {SignInWithGoogle ? g_avatar : no_avatar}  */}
            </div>
            <br></br>
            <div>
                <button 
                    className="btn btn-danger"
                    onClick={() => signOut(auth)}>Выйти из аккаунта
                </button>
            </div>
        </div>
    )
}

