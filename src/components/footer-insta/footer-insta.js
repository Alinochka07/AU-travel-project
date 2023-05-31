import React from "react";
import "./footer-insta.css";
import insta_bg from "../../img/web-photos/insta-block-bg.png";


export default function FooterInstaBlock() {
    return(
        <div className="footer-insta-block">
            <img alt="insta-travel-trip-au-travel" src={insta_bg} width="1200px" height="350px"></img>
            <h3>Мы в социальных сетях...</h3>
            <div className="social-icons">
                <a href="/"><span className='bi bi-facebook'></span></a>
                <a href="/"><span className='bi bi-instagram'></span></a>
                <a href="/"><span className='bi bi-telegram'></span></a>
            </div>
           
        </div>
    )
}