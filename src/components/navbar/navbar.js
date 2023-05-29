import React, {useState} from "react";
import "./navbar.css";
import SearchFunction from "../search";
import logo from "../../img/logo/au_travel_fullLogo.png";
import { Link } from "react-router-dom";
import SideNav from "../right-side-nav/right-side-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({tours}) => {

    const [width, setWidth] = useState('0%');

    const openSidenav = () => {
        setWidth('20%');
    }

    const closeSidenav = () => {
        setWidth('0%');
    }

        return (
            <nav className="topnav">
                <Link id="home" to = '/'> 
                    <div className="left-side-logo">
                        <img src = {logo} alt='au_travel_logo' id="main-logo" />
                    </div>
                </Link>
                           
                <div className="header_menu_tabs">
                        <Link to="/all-destinations" style={{'textDecoration': 'none'}}><span className="menu">Направления</span></Link>
                        <Link to="/offers" style={{'textDecoration': 'none'}}><span className="menu">Предложения</span></Link>
                        <Link to="/tours" style={{'textDecoration': 'none'}}><span className="menu">Туры</span></Link>
                        <Link to="/advices" style={{'textDecoration': 'none'}}><span className="menu">Полезные советы</span></Link>
                </div>
                <div className="right-side-menu">
                    <span>
                        <SearchFunction tours={tours}/>
                    </span>
                    <span>
                        <button onClick={openSidenav} type="button" data-toggle="sidenav"
                            className="accountbtn" id="sidenavbar" aria-haspopup="true">
                                <FontAwesomeIcon icon={faBars} />
                        </button>
                        <SideNav 
                        closeSidenav={closeSidenav}
                        width={width}
                        setWidth={setWidth}/>
                    </span>
                </div>
            </nav>
        )
    } 


export default Navbar;  