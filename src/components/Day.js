import React from "react";
import ContextMenu from "./ContextMenu";
const Day = (props) => {

    const componentToSetMenu = ()=><div style={{fontSize:"20px",marginRight: "30px"}}>{props.d}</div> ;

    return (<div style={{display:"inline-block"}}>
     
        {/* <h4>{`${props.d.day} ${props.d.month} ${props.d.dayInWeek}`}</h4> */}
        
        <ContextMenu contextComponent={componentToSetMenu} date={props.d}></ContextMenu>
        
    </div>) 

}
export default Day

   

