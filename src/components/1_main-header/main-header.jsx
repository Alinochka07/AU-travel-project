import React from "react";
import "./main-header.css";
import { Link } from "react-router-dom";



export default function MainHeader() {
    return(
            <div className="myheader">
                <h1 id="h1">Самое время для</h1>
                <h1 id="h1_1">путешествий!</h1>
                <Link to="/offers"><button type="button" className="main_header_btn">Давай глянем что мы приготовили для тебя!</button></Link>
            </div>
    )
}
