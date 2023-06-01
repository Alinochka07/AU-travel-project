import React from 'react';
import "./ModalForm.css";

export default function ModalForm({setShowModal, showModal}) {

    if(!showModal) {
        return null

    } else {
        return <div className='modal'>
                    <div className='modal-content' style={{background: 'white'}}>
                        <div className='modal-header'>
                            <h4 className='modal-title'>Заявка на тур</h4>
                        </div>
                        <div className='modal-body'>
                            {/* <form>
                                <input placeholder='ФИО'></input>
                                <input placeholder='Телефон'></input>
                                <input placeholder='E-mail'></input>
                                <input type='radio'></input>
                                <button className='form_button'>Отправить</button>
                            </form> */}
                            
                        </div>
                        <div className='modal-footer'>
                            <button onClick={() => setShowModal(false)} className='button'>Close</button>
                        </div>
                    </div>
                </div>
    }


}
