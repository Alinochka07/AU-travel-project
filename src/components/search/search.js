import React, { useState } from "react";
import "./search.css";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";



const SearchFunction = ({tours}) => {
   
    const [searchValue, setSearchValue] = useState('');


    if(tours) {
            const myTours = Object.entries(tours).map(tour => tour[1])
            const myFilter = myTours.filter(tour => (tour.destination.toLowerCase()).includes(searchValue.toLowerCase()))
        

        return <div className="input-group mb-3">
                    <form>
                        <span>
                            <input type="text" 
                                name="search"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                className="input_search" 
                                placeholder="Поиск..."/>
                        
                            <NavLink to='/results?keyword=value'>
                                <button type="button" className="searchbtn"><span className="bi bi-search" ></span></button>
                            </NavLink>
                            <div>
                                {searchValue ? 
                                    myFilter.map(filtered => {
                                        return <div key={filtered.id} className="search_dropdown">{filtered.destination}</div>
                                    })
                                    :
                                    null
                                }
                            </div>
                        </span>
                    </form>
                </div>
    } else {
        return null
    }
    

}
  


const mapStateToProps = (state) => {
    return {
        tours: state.firestore.data.tours
    }
}
    
export default compose(connect(mapStateToProps), firestoreConnect())(SearchFunction);





