import React from "react";
import "../styles/styles.css"

const Slide = (props) => 
    <div className={"fullscreen slide-" + props.slideStatus} classID={"slide-" + props.slideId}>
        {props.children}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>

export default Slide;
