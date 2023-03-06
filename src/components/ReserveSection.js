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
                    <img src={restaurantchefB} id="Areserve" alt="chef cooking" ></img>
                    <img src={restaurant} id="Breserve" alt="restaurant's garden"></img>
                </section>
                <form className="reserveform">
                    <h1>Find your table for any occassion</h1>
                    <div className="date">
                        <input 
                        placeholder="Date"
                        type="text" /*onChange={(e) => console.log(e.target.value)}*/
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} id="date" name='date'/>
                    </div>
                    <div className="time">
                        <select id="time" name="time" required>
                        <option value="title">Time</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
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
                        <option value="birthday">Dinner</option>
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