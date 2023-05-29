import React, { useState, useEffect } from "react";
// import { TouchableOpacity, View, Image } from 'react-native-web';
import "./search.css";
import { useParams, NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import axios from "axios";
import ReactSearchBox from "react-search-box";
import PropTypes from 'prop-types';


const SearchFunction = (props) => {

    const {id} = useParams()
  
  	const {tours} = props;

    const [searchValue, setSearchValue] = useState()
    const [filteredTours, setFilteredTours] = useState()

    useEffect(() => {
        const someFunction = (tours) => {
            setFilteredTours(tours.data.includes(searchValue))
        }
    }, [])

        return (
            <div className="input-group mb-3">
                <form>
                    <span>
                        <input type="search" 
                        onChange={e => setSearchValue(e.target.value)}
                        className="input_search" placeholder="Поиск..."/>
                        
                        <NavLink to='/results?keyword=value'>
                            <button type="button" className="searchbtn"><span className="bi bi-search" ></span></button>
                            </NavLink>
                            <div>
                                {/* {filteredTours}
                                {tours && tours.data.map(tour => {
                                    <div key={tour.id}>{tour.title}</div>
                                })} 
                                {tours && tours.filter(tour => tour.includes(searchValue).map(filteredTour => {
                                    return <div key={filteredTour.id}>{filteredTour.title}</div>
                                }))}  */}
                            </div>
                    </span>
                </form>
       
            </div>
    )
    
    
}
  


const mapStateToProps = (state) => {
    return {
        tours: state.firestore.data.tours
    }
}
    
export default compose(connect(mapStateToProps), firestoreConnect())(SearchFunction);




