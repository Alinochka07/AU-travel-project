import React, {useState} from 'react';
import "./Modal.css";
import { Button } from "@mui/material";
import {useLocation} from "react-router-dom";

// import createApplication from "../../../store/actions/applicationActions";
import { connect } from "react-redux";
import { createApplication } from '../../../store/actions/applicationActions';




function Modal({setShowModal, showModal}) {

    const location = useLocation()
    console.log(location)


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        createApplication({
            name, 
            phone, 
            email, 
            comment
        })
        console.log(createApplication)
    }

    if(!showModal) {
        return null 
    } else 
        return <div className='modal' 
        
                style={{position: 'fixed',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    
                    <div className='modal-content' 
                    style={{background: 'white',
                        display: 'flex',
                        width: '45vw',
                        padding: '10px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        lineHeight: '2'
                        }}>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Заявка на тур</h4>
                        </div>
                        <div className='modal-body'>
                            <form className='input_form' onSubmit={handleSubmit}>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='ФИО'></input>
                                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder='Телефон'></input>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'></input>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Комментарии'></textarea>
                                <div style={{display: 'flex', justifyContent: 'center'}}><button onClick={handleSubmit} className='form_button'>Отправить</button></div>
                            </form>
                            
                        </div>
                        <div className='modal-footer'>
                            <Button onClick={() => setShowModal(false)} className=''>Закрыть</Button>
                        </div>
                    </div>
                </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        createApplication: (application) => dispatch(createApplication(application))
    }
}

export default connect(null, mapDispatchToProps)(Modal);
