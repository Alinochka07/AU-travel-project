import React, { useEffect, useState, createContext, useContext } from "react";
import { db } from "../../index";
import "./choose-destination.css";
import { useNavigate } from "react-router-dom";
import DateChoose from "./date-picker";


export const SelectedContext = createContext();
export const useSelectContext = () => useContext(SelectedContext)


const ChooseDestination = ({children}) => {
    const [tours, setTours] = useState();
    const [selected, setSelected] = useState();
    
    const navigate = useNavigate()


    useEffect(() => {
        return db.collection('Tours')
        .onSnapshot((snapshot) => {
        const tourData = [];
        snapshot.forEach((doc) => tourData.push({ ...doc.data(), id: doc.id }));
        setTours(tourData);
        console.log(tourData);
        });
    }, []);
  
    console.log(tours);
    console.log(selected);

    const handleValueChange = (e) => {
        setSelected(e.target.value)
    } 

    const Select = () => {
        return(
            <div>
                <select className="select_option" value={selected} onChange={handleValueChange}> 
                    <option>Выбрать направление</option>
                    {tours ? (
                        tours.map((tour) => <option key={tour.id} value={tour.id}>{tour.label}</option>)
                    ) : null}
                </select>
            </div>
        )
    }

    const onSelect = () => {
        navigate(`/tours-page/`)
    } 

    return(
        
        <SelectedContext.Provider value={{ selected, setSelected }}>
            <div className="choose-destination">
                <table className="table">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Направление</th>
                                <th scope="col">Предполагаемые даты</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="static">
                                        <Select/>
                                    </div>
                                    
                                </th>
                                <th id="table-calendar">
                                    {/* <button className="btn btn-light dates" onClick={this.onClickButton}>Выбрать даты</button> */}
                                    <div id="calendar-window">
                                        <div 
                                        // hidden={ !this.state.hidden ? true : false }
                                        >
                                            {/* <DateChoose /> */}
                                            {/* <p id="close-calendar" onClick={this.onClickButton}>x</p> */}
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="input-group mb-3">
                                        <button className="searchfortour" onClick={onSelect}>Нажми для просмотра</button>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                </table>
                {children}
            </div>
        </SelectedContext.Provider>
       
    )
}


export default ChooseDestination;

