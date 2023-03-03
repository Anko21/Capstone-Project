import React from "react";
import '../App.css'
import restaurantfood from "../assets/restaurantfood.jpg"
import ReserveSection from "./ReserveSection";
import {Routes, Route, Link} from 'react-router-dom';


function HeroSection(){
    const handleClick=()=>{
        return(
            <div>
            <a href="/reservations"></a>
            </div>
        )}
    return(
    <div className="hero">
        <div className="heroInfo">
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="details">We are a family owned Mediterranean restaurant, focus on traditional recipes served in a modern twist.</p>
            </article>
            <div className="reservebtn">
                <button onClick={handleClick}>Reserve a table</button>
            </div>
        </div>
        <img
            src={restaurantfood}
            alt="Little Lemon logo"
            >
        </img>
    </div>
    )
}

export default HeroSection;