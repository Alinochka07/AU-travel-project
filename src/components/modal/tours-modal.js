import React, { Component, useState, useEffect, useContext } from "react";
import "./tours-modal.css";
import Modal from 'react-bootstrap/Modal';
import DataTours from "../datatours/data-tours";
import Content from "../choose-destination/choose-dest";
import SelectedContext from "../choose-destination/choose-dest";
import Select from "../choose-destination/choose-dest";
import { useStore } from "react-context-hook";




export default function ToursModal(props) {

    // const {selected, setSelected} = useContext(SelectedContext);
    const [show, setShow] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleclose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const {selected} = useContext(SelectedContext)


    return (
        
        <div>
            
            <button onClick={handleShow} data-toggle="modal"
                id="modal-window" aria-haspopup="true" className="btn btn-outline tours-search">Нажми для просмотра
            </button>
            
            <Modal
             className="modal-window" show={show} onHide={handleclose}>
                <Modal.Header closeButton>
                    <div>
                        
                    </div>
                </Modal.Header>
                <div className="body-modal">
                    <Modal.Body>
                        <div>
                            You had chosen {}              
                        </div>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    
                    <button id="close-modal" 
                    
                    onClick={function(e){handleclose()}}>
                        Закрыть
                        
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
)
}



