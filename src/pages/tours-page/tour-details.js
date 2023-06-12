import React, {useState} from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal-form-submit/Modal";




const TourDetails = () => {


	const {id} = useParams();
	const location = useLocation();
	const [tour, setTour] = useState(location.state);
	const [showModal, setShowModal] = useState(false);
	const [selectedId, setSelectedId] = useState()

	const handleClick = (e) => {
		setShowModal(true);
		setSelectedId(id)
	}


  	if(id) {

    	return (
            <div className="container section tour-details">
				{
					tour.filter((tr) => (tr.id === id)).map(tourr => {
						return <><p className="left">Код тура: <p style={{fontSize: "smaller"}}>{id}</p></p>
						<div className="jumbotron">
							<h5 className="display-4"> {tourr.title} </h5> 
							<p className="lead"><FontAwesomeIcon icon={faLocationDot}/> {tourr.destination}</p>
							<hr className="my-4"></hr>
							<div className="jumbotron_container">
								<div className="travel-info">
									<h6>Информация о визе:  </h6>
									<p>{tourr.visa}</p>
									<h6>Даты тура: </h6>
									<p>{tourr.dates} </p>
										{tourr.onbase ? <><h6>Проживание в отеле: </h6> <p>{tourr.onbase}</p></> : null}
										{tourr.onbase2 ? <><h6> Проживание в отеле: </h6><p> {tourr.onbase2} </p></> : null}
										<p>{tourr.details} </p>
										<h6>Стоимость на одного взрослого от: </h6> <p> ${tourr.price}</p>
									<button onClick={handleClick} className="form_button"><Link style={{color: "white", textDecoration: "none"}} to='' state={selectedId}>Оставить заявку на этот тур!</Link></button>
								</div>
								<div className="images">
									<div className="image-list">
										{tourr.image ? 
										<div className="img"><img className="img-fluid" alt="au-travel" width="650px" height="540px" src={tourr.image}></img></div>
										: null }
										
									</div>
								</div>
							</div>
						</div>
						</>
					})
				}
              	
				<Modal 
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
