import React, { useState } from "react";
import * as moment from 'moment';
import Day from "./Day";



const Calendar = () => {
    const [stateDay, setStateDay] = useState(moment().startOf('week'));
    const [contextMenu, setContextMenu] = useState(null);
    
    const nextWeek = (() => {
        const newDay = moment(stateDay).add(7, 'days');
        setStateDay(newDay);});
        
    const lastWeek = (() => {
        const newDay = moment(stateDay).add(-7, 'days');
        setStateDay(newDay);});
        
    const addEvent = (() => { })

    const findEvent = (() => { })
    
    //
    

    return (<>
        <button onClick={() => {nextWeek()}}>{"---->"}</button>
        <button onClick={() => { lastWeek() }}>{"<----"}</button> 
        <button onClick={() => { setStateDay(moment()) }}>{"תאריך נוכחי"}</button>
        <button onClick={() => { addEvent() }}>{"הוסף אירוע"}</button> 
        <button onClick={() => { findEvent() }}>{"חפש אירוע"}</button> <br></br>
        {new Array(7).fill('0').map((item, index) =>  <Day key={index} d={stateDay.day(index).format("dddd YYYY-MM-DD")}/>)}
    </>)
}

export default Calendar