import React, { useState, useContext, createContext ,useEffect} from "react";
import * as moment from "moment";
import Day from "../components/Day";
import { userIdContext } from "../App";
import axios from "axios";

export const eventsArray = createContext([]);

const Calendar = () => {
  const [stateDay, setStateDay] = useState(moment().startOf("week"));
  const [contextMenu, setContextMenu] = useState(null);
  const [events, setEvents] = useState([]);
  const { userId } = useContext(userIdContext);
  
  const nextWeek = () => {
    const newDay = moment(stateDay).add(7, "days");
    setStateDay(newDay);
  };

  useEffect(async() => {
    try {
        const url = `http://localhost:5102/Event/${userId}`;
        const res = await axios.get(url);
        if (res.data.value) setEvents(res.data.value);
       }catch (err) {
        console.log(err);
      }
  },[]);

  const lastWeek = () => {
    const newDay = moment(stateDay).add(-7, "days");
    setStateDay(newDay);
  };

  const addEvent = () => {};

  const findEvent = () => {};

  return (
    <eventsArray.Provider value={events}>
      <h2>Calendar</h2>
      {/* {events.length && events.map((x)=>(<h3>{x.title}</h3>))} */}
      <button
        onClick={() => {
          nextWeek();
        }}
      >
        {"---->"}
      </button>
      <button
        onClick={() => {
          lastWeek();
        }}
      >
        {"<----"}
      </button>
      <button
        onClick={() => {
          setStateDay(moment());
        }}
      >
        {"תאריך נוכחי"}
      </button>
      <button
        onClick={() => {
          addEvent();
        }}
      >
        {"הוסף אירוע"}
      </button>
      <button
        onClick={() => {
          findEvent();
        }}
      >
        {"חפש אירוע"}
      </button>{" "}
      <br></br>
      {new Array(7).fill("0").map((item, index) => (
        <Day key={index} d={stateDay.day(index).format("dddd YYYY-MM-DD")} />
      ))}
    </eventsArray.Provider>
  );
};

export default Calendar;
