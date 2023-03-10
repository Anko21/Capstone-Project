import React from "react";
import '../App.css'
import { useState } from "react";
import { Link} from 'react-router-dom';

function ReserveForm(){

    const [values,setValues]=useState({
        date:"Date",
        title:"Number of diners",
        occasion: "Occasion",
        standard:false,
        outside:false
    })
    const [times,setTimes]=useState("Time");

    console.log(values);

    const handleChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const radioChange=(e)=>{
        setValues({...values, [e.target.id]: true})
    }

    const handleSubmit=(e)=>{
        e.preventDefult();
    }
    const availableTimes=["19:00","19:30","20:00","20:30","21:00","21:30"]

    return(
    <div className="reserveform">
        <form onSubmit={handleSubmit}>
        <h1>Find your table for any occassion</h1>
        <div className="date">
            <input
            placeholder="Date"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="date"
            name='date'
            value={values.date}
            onChange={handleChange}/>
        </div>
        <div className="time">
            <select
            id="time"
            name="time"
            required
            value={times}
            onChange={(e)=>{setTimes(e.target.value)}}
            >
            <option value="title">Time</option>
            {availableTimes.map((availableTime)=>(
                <option key={availableTime}>{availableTime}</option>)
            )}
            {/* <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option> */}
            </select>
            <br></br>
        </div>
        <div className="diners">
            <select
            id="diners"
            name="diners"
            required
            value={values.diners}
            onChange={handleChange}
            >
            <option value="title">Number of diners</option>
            <option value="0-2">0-2</option>
            <option value="2-4">2-4</option>
            <option value="4-6">4-6</option>
            <option value="more than 6">more than 6</option>
            </select>
            <br></br>
        </div>
        <div className="occasion">
            <select
            id="occasion"
            name="occasion"
            required
            value={values.date}
            onChange={handleChange}
            >
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
                    <label htmlFor="standard">Standard</label>
                    <input
                    type="radio"
                    id="standard"
                    name="seating"
                    value={values.standard}
                    onChange={radioChange}/> <br/>
                </section>
                <section className="seatout">
                    <label htmlFor="outside">Outside</label>
                    <input
                    type="radio"
                    id="outside"
                    name="seating"
                    value={values.outside}
                    onChange={radioChange}/> <br/>
                </section>
            </div>
        </div>
        {/* <Link to="/pay"> */}
            <input type="submit" className="reserveformButton" value="Make your reservation" />
        {/* </Link> */}

        </form>
    </div>
    )
}
export default ReserveForm;