import React, { useState } from 'react';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ru from "date-fns/locale/ru";
import "./date-picker.css";



export default function DateChoose() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ]);
  return (
    <div className="date-picker">
      <DateRange
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      
    </div>
  );
}
