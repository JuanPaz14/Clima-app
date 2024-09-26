import { useState } from "react";
import styles from "./weatherForm.module.css";

export default function WeatherForm({onChangeCity}){

    const[city,setCity]=useState("");//estado input

    function onChange(e){//cambia estado de city cada vez que hay un cambio en elinput
        const value = e.target.value;
        if(value!==""){
            setCity(value);
        } 
    }

    function handleSubmit(e){//elimina el comportamiendo nativo del form
        e.preventDefault();
        onChangeCity(city);
      
    }

    return(
        <form onSubmit={handleSubmit} className={styles.container}>
            <input className={styles.input} type="text" onChange={onChange} placeholder="City"/>
        </form>  
    )
}