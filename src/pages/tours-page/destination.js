import React, { useState, useEffect } from "react";
import "../../components/2_choose-destination/choose-destination.css";
import { useNavigate, Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const Destination = ({ tours }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [chosenTour, setChosenTour] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated tours:", tours);

    const tourCount = tours ? Object.entries(tours).length : 0;
    console.log("Total tours:", tourCount);

  }, [tours]);

  const onSelect = () => {
    return navigate(`/tour/${selectedValue}`);
  };

  if (tours) {
    const myTours = Object.entries(tours).map((tour) => tour[1]);

    const handleChange = (e) => {
      setSelectedValue(e.target.value);
      setChosenTour(myTours);
    };

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
                    {myTours &&
                      myTours.map((tour) => (
                        <option value={tour.id} key={tour.id}>
                          {tour.destination}
                        </option>
                      ))}
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
                  <Link to={`/tour/${selectedValue}`} state={myTours}>
                    <button className="searchfortour" onClick={onSelect}>
                      Нажми для просмотра
                    </button>
                  </Link>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Please, wait for retrieving data from backend</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    tours: state.firestore.data.tours,
  };
};

export default compose(connect(mapStateToProps), firestoreConnect())(
  Destination
);
