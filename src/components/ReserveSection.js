import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'
import restaurantchefB from '../assets/restaurantchefB.jpg'
import restaurant from '../assets/restaurant.jpg'
import ReserveForm from "./ReserveForm"

function ReserveSection(){
        return (
        <div className="reservepage">
            <div className="reserve">
                <section className="reserveside">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <img src={restaurantchefB} id="Areserve" alt="chef cooking" ></img>
                    <img src={restaurant} id="Breserve" alt="restaurant's garden"></img>
                </section>
                <ReserveForm/>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default ReserveSection;