import React from "react";
import { useWeather } from "../context/Weather";

const Input = (props) => {
    const weather = useWeather();
    console.log(weather);
    return (
        <input className="input-field" type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    )
}

export default Input;