import React from "react";
import '../App.css'
import FooterWhite from './FooterWhite.js'
import restaurantchefB from '../assets/restaurantchefB.jpg'
import restaurant from '../assets/restaurant.jpg'


function ReserveSection(){
    return (
        <div className="reservepage">
            <div className="reserve">
                <section className="reserveside">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <img src={restaurantchefB} id="Areserve" alt="chef cooking" width={300}></img>
                    <img src={restaurant} id="Breserve" alt="restaurant's garden" width={300}></img>
                </section>
                <form className="reserveform">
                    <h1>Find your table for any occassion</h1>
                    <div className="date">
                        <select id="date" required>
                            <option value="title">Date</option>
                            <option value="22/02/2023">22/02/2023</option>
                            <option value="23/02/2023">23/02/2023</option>
                            <option value="24/02/2023">24/02/2023</option>
                            <option value="25/02/2023">25/02/2023</option>
                            <option value="26/02/2023">26/02/2023</option>
                            <option value="27/02/2023">27/02/2023</option>
                            <option value="28/02/2023">28/02/2023</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="time">
                        <select id="time" name="time" required>
                        <option value="title">Time</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="diners">
                        <select id="diners" name="diners" required>
                        <option value="title">Number of diners</option>
                        <option value="0-2">0-2</option>
                        <option value="2-4">2-4</option>
                        <option value="4-6">4-6</option>
                        <option value="more than 6">more than 6</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="occasion">
                        <select id="occasion" name="occasion" required>
                        <option value="title">Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                        <option value="coorporate dinner">Coorporate dinner</option>
                        </select>
                        <br/>
                    </div>
                    <div className="seating">
                        <h3>Seating options</h3>
                        <div className="seatingradio">
                            <section className="seatin">
                                <label for="standard">Standard</label>
                                <input type="radio" id="standard" name="seating" value="Standard"/> <br/>
                            </section>
                            <sectio className="seatout">
                                <label for="outside">Outside</label>
                                <input type="radio" id="outside" name="seating" value="Outside"/> <br/>
                            </sectio>
                        </div>
                    </div>
                    <button>Let's go</button>
                </form>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default ReserveSection;