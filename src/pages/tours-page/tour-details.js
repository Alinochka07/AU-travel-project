import React from "react";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const TourDetails = (props) => {
  	const {id} = useParams();
  
  	console.log(props);
  	const {tours} = props;

  	if(tours){
    	const {title, details, price, visa, dates, onbase, onbase2, destination, image, image2, image3} = tours[id];
    	return (
            <div className="container section tour-details">
              	<p className="left">ID:{id}</p>
				<div className="jumbotron">
					<h5 className="display-4"> {title} </h5> 
					<p className="lead"><FontAwesomeIcon icon={faLocationDot}/> {destination}</p>
					<hr className="my-4"></hr>
					<div className="travel-info">
						<p>Информация о визе: {visa} <br></br>
							Даты тура: {dates} <br></br>
							{onbase ? <>Проживание в отеле: {onbase}</> : null}
							{onbase2 ? <>Проживание в отеле: {onbase2}</> : null} <br></br>
							{details}<br></br>
							Стоимость на одного взрослого от:<strong> ${price}</strong>
						</p>
					</div>
					<div className="images">
						<div className="image-list">
							{image ? 
							<div className="img"><img className="img-fluid" alt="au-travel" width="650px" height="540px" src={image}></img></div>
							: null }
							{ image2 ?
							<div className="img"><img className="img-fluid" alt="" width="650px" height="540px" src={image2}></img></div>
								: null }
							{ image3 ?
							<div className="img"><img className="img-fluid" alt="" width="650px" height="540px" src={image3}></img></div>
							: null
							}
						</div>
					</div>
				</div>
    		</div>
)
} else {
    return (
        <div className="container center text-warning">
            <p>Подождите пожалуйста, загружается...</p>
        </div>
    )
}
}

const mapStateToProps = (state) => {
return {
    tours: state.firestore.data.tours
}
}

export default compose(connect(mapStateToProps), firestoreConnect())(TourDetails);
