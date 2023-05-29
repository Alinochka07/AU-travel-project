import React from "react";
import Content from "../choose-destination/choose-destination";
import { useNavigate } from "react-router-dom";



export default function OnSelect(props) {
    // const navigate = useNavigate()
    const {onSelect} = props;

    return(
        <button className="searchfortour" onClick={onSelect}>Click here</button>
    )
    
}