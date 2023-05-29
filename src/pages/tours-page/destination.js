import React, {useState} from "react";
import "../../components/2_choose-destination/choose-destination.css";
import { useNavigate } from "react-router-dom";



const Destination = ({tours}) => {

    const [selectedValue, setSelectedValue] = useState()

    const navigate = useNavigate();


    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        console.log(selectedValue)
    }

    const onSelect = () => {
        return navigate(`/tour/${selectedValue}`)
    }

    return (
        <div className="choose-destination">
                <table className="table">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Выбери направление</th>
                                {/* <th scope="col">Предполагаемые даты</th> */}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="static">
                                        <select className="form-select" onChange={handleChange}>
                                            <option>Выбрать</option>
                                            {tours && tours.map((tour) => 
                                                <option value={tour.id} key={tour.id}>{tour.destination}</option>
                                            )}
                                        </select>
                                    </div>
                                    
                                </th>
                                {/* <th id="table-calendar">
                                    <button className="btn btn-light dates" onClick={this.onClickButton}>Выбрать даты</button>
                                    <div id="calendar-window">
                                        <div 
                                        hidden={ !this.state.hidden ? true : false }
                                        >
                                            <DateChoose />
                                            <p id="close-calendar" onClick={this.onClickButton}>x</p>
                                        </div>
                                    </div>
                                </th> */}
                                <th id="button-th">
                                    <div className="input-group mb-3">
                                        <button className="searchfortour" onClick={onSelect}>Нажми для просмотра</button>
                                    </div>
                                    
                                </th>
                            </tr>
                        </tbody>
                </table>
            </div>
    )
}

export default Destination;