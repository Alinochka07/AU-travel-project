import React, {useState, useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ModalForm from "../../components/modal-form-submit/ModalForm";




const TourDetails = () => {


	const {id} = useParams();
	const location = useLocation();
	const [tour, setTour] = useState(location.state);
	const [showModal, setShowModal] = useState(false);


  	if(id) {
		const thisTour = tour.filter((tr) =>(tr.id === id))

    	return (
            <div className="container section tour-details">
              	<p className="left">ID:{id}</p>
				<div className="jumbotron">
					<h5 className="display-4"> {thisTour[0].title} </h5> 
					<p className="lead"><FontAwesomeIcon icon={faLocationDot}/> {thisTour[0].destination}</p>
					<hr className="my-4"></hr>
					<div className="jumbotron_container">
						<div className="travel-info">
							<h6>Информация о визе:  </h6>
							<p>{thisTour[0].visa}</p>
							<h6>Даты тура: </h6>
							<p>{thisTour[0].dates} </p>
								{thisTour[0].onbase ? <><h6>Проживание в отеле: </h6> <p>{thisTour[0].onbase}</p></> : null}
								{thisTour[0].onbase2 ? <><h6> Проживание в отеле: </h6><p> {thisTour[0].onbase2} </p></> : null}
								<p>{thisTour[0].details} </p>
								<h6>Стоимость на одного взрослого от: </h6> <p> ${thisTour[0].price}</p>
							<button onClick={() => setShowModal(true)} className="form_button">Оставить заявку на этот тур!</button>
							
						</div>
						<div className="images">
							<div className="image-list">
								{thisTour[0].image ? 
								<div className="img"><img className="img-fluid" alt="au-travel" width="650px" height="540px" src={thisTour[0].image}></img></div>
								: null }
								
							</div>
						</div>
					</div>
				</div>
				<ModalForm 
					showModal={showModal}
					setShowModal={setShowModal}
				/>
    		</div>
			
)
} 
else {
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
