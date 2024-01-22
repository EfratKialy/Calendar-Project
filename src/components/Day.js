import React, { useContext ,useEffect, useState} from "react";
import ContextMenu from "./ContextMenu";
import { eventsArray } from "../pages/Calendar";
 


const Day = (props) => {
    const events = useContext(eventsArray)
    const[currentEvents,setCurrentEvents] = useState([])
    // useEffect(()=>{
    // if(events!=null)
    //   setCurrentEvents(events.filter(((e) => e.startDate === new Date(props.d).toISOString()))) 
    // },[currentEvents])
    const componentToSetMenu = ()=><div style={{fontSize:"20px",marginRight: "30px"}}>{props.d}</div> ;

    return (<div style={{display:"inline-block"}}>
             
        {/* <h4>{`${props.d.day} ${props.d.month} ${props.d.dayInWeek}`}</h4> */}
        <ContextMenu contextComponent={componentToSetMenu} date={props.d}></ContextMenu>        
        {events.length && events.map((e,index) =>{if (e.startDate === new Date(props.d).toISOString()) 
          return <h3>{e}</h3> } )}  
        
    </div>)

}
export default Day

   

