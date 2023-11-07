import React from "react";
import s from './Accordion.module.css'
import Star from "../Star/Star";

function Accordion () {
    return (
        <>
        <AccordionBody value={0} />
        <AccordionTitle  value = {4}/>
        </>
    )
}

function AccordionBody (props) {
    if(props.value === 0){
        return (
        <>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        </>
        )
    }
    if(props.value === 1){
        return (
        <>
        <Star selected = {true}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        </>
        )
    }
    if(props.value === 2){
        return (
        <>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        </>
        )
    }
    if(props.value === 3){
        return (
        <>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {false}/>
        <Star selected = {false}/>
        </>
        )
    }
    if(props.value === 4){
        return (
        <>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {false}/>
        </>
        )
    }
    if(props.value === 5){
        return (
        <>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        <Star selected = {true}/>
        </>
        )
    }
}

function AccordionTitle (props) {
    return (
        <>
        <ul className={s.text}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
        <Star selected = {true}/>
        <Star selected = {false}/>
        <Star selected = {true}/>
        <Star selected = {false}/>
        <Star selected = {true}/>
        </>
    )
}


export default Accordion