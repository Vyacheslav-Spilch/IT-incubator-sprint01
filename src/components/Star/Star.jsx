import React from "react";
import s from './Star.module.css'

function Star (props) {
    if(props.selected) {
        return <span className={s.text}><b>Star </b></span>
    } else {
        return <span className={s.text}>Star </span>
    }
}

export default Star