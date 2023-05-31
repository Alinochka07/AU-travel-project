import React from "react";
import "./side-nav.css";
import { Link } from "react-router-dom";
import au_travel_logo from "../../img/logo/au_logo.png"
import ru_flag from "../../img/flags/ru.png";
import kgs_flag from "../../img/flags/kgz.png";
import us_flag from "../../img/flags/us.png";
import { signOut } from "firebase/auth";
import { auth } from "../../index";
import { useAuthValue } from "../../pages/account/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SideNav(props) {
    
        const {closeSidenav, width} = props;
        const {currentUser} = useAuthValue();

        return (
            <div>
                <div id="mySidenav" className='sidenav' style={{width: width, paddingTop: '20px' }}>
                    <button className="closebtn" onClick={closeSidenav}>X</button>
                    <img alt="au travel logo" src={au_travel_logo} width="100px" style={{paddingLeft: '40px'}}></img>

                    {/* <img alt="profile_image" id="avatar_image" width="70px" src={
                        !SignInWithGoogle ? localStorage.getItem('avatar') : au_travel_logo}>
                    </img> */}
                    {currentUser ? 
                        <div>
                            <h5 id="hello_msg">{`Привет, ${currentUser.displayName}`}</h5>
                            <button id="sign_out" onClick={() => signOut(auth)}><span className='bi bi-person-x-fill'>  Выйти</span> </button>
                          
                            <div className="dropdown">
                                <button type="button" className="settings" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="false" aria-controls="collapseExample">
                                    <span><FontAwesomeIcon icon={faGear}/> Настройки</span></button>
                                    <div className="collapse" id="collapseSettings">
                                    <div className="card card-body">
                                        <Link to="/reset-password"><span>  Обновить пароль</span></Link>
                                        <Link to="/reset_email"><span>  Изменить электронную почту</span></Link>
                                        <Link to="/delete-account"><span>  Удалить аккаунт</span></Link>
                                    </div>
                                </div>
                            </div>
                           
                            
                        </div> : 
                        <>
                            <Link to="/login"><span className='bi bi-person-check-fill'>  Войти</span> </Link>
                            <Link to="/register"><span className='bi bi-person-plus'>  Регистрация</span></Link>
                        </>
                    }

                    
                    
                   
                    <div className="dropdown">
                        <button type="button" className="languagebtn" data-toggle="collapse" data-target="#collapseLanguage" aria-expanded="false" aria-controls="collapseExample"><span className="bi bi-globe"> Выбрать язык</span></button>
                        <div className="collapse" id="collapseLanguage">
                            <div className="card card-body">
                                <Link to="kyrgyz"><img alt="kgs_flag" src={kgs_flag} width="20px" height="20px"/><span>  Кыргызча</span></Link>
                                <Link to="/"><img alt="ru_flag" src={ru_flag} width="20px" height="20px"/><span>  Русский</span></Link>
                                <Link to="english"><img alt="us_flag" src={us_flag} width="20px" height="20px"/><span>  English</span></Link>
                            </div>
                        </div>
                    </div>
                   
                    <Link to="/about-us">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                    <Link to="/faq">Часто задаваемы вопросы</Link>
                    <Link to="/help">Помощь по сайту</Link>
                </div>
            </div>
            
        )
    }
    
