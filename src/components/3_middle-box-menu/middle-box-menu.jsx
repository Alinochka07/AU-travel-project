import React from "react";
import "./middle-box-menu.css";
import map_icon from "../../img/web-photos/map-icon.png";
import binocular from "../../img/web-photos/binocular.png";
import suitcase from "../../img/web-photos/suitcase.png";
import relax_icon from "../../img/web-photos/relax.png";


export default function BoxMenu() {


        return(
            <div className="box-menu">
                <div className="box">
                    <img alt="map_icon" src={map_icon} width="80px" height="80px"></img>
                    <h5>Выбери направление</h5>
                    <p>Lorem ipsum dolor some short text here... </p>
                </div>
                <div className="box">
                    <img alt="binocular" src={binocular} width="80px" height="80px"></img>
                    <h5>Открывай новые места</h5>
                    <p>Lorem ipsum dolor some short text here... </p>
                </div>
                <div className="box">
                    <img alt="suitcase" src={suitcase} width="80px" height="80px"></img>
                    <h5>Путешествуй с нами</h5>
                    <p>Lorem ipsum dolor some short text here... </p>
                </div>
                <div className="box">
                    <img alt="relax_icon" src={relax_icon} width="80px" height="80px"></img>
                    <h5>Получай удовольствие</h5>
                    <p>Lorem ipsum dolor some short text here... </p>
                </div>
            </div>
        )

}