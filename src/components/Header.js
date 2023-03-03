
import '../App.css'
import React from "react";
import logo from "../assets/logo.png"
import AboutSection from "./AboutSection.js"
import ReserveSection from "./ReserveSection.js"
import LoginSection from "./LoginSection.js"
import {Routes, Route, Link} from 'react-router-dom';
import HighlightsSection from './HighlightsSection';
import PaymentSection from './PaymentSection';


function Header(){


    // const changeBackground= (e)=>{
    //     e.target.style.background = "#495E57"
    // }

    const handleClick=()=>{}
//need to add function and header hide/show and 
    return(
        <div className="header">
            <img
            src={logo}
            alt="Little Lemon logo"
            />
            <nav>
                <ul className="navbar">
                    <Link to="." className="nav-item" onClick={handleClick()} /*onMouseOver={changeBackground}*/>Home </Link>
                    <Link to="/about" className="nav-item" >About</Link>
                    <Link to="/menu" className="nav-item" onClick={handleClick()}>Menu</Link>
                    <Link to="/reservations" className="nav-item" onClick={handleClick()}>Reservations</Link>
                    <Link to="/onlineOrder" className="nav-item" onClick={handleClick()}>Order Online</Link>
                    <Link to="/login" className="nav-item" onClick={handleClick()} >Login</Link>
                    <Link to="/pay" className="nav-item" onClick={handleClick()} >pay</Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/"/>
                <Route path="/about" element={<AboutSection/>} />
                <Route path="/menu" element={<HighlightsSection/>}/>
                <Route path="/reservations" element={<ReserveSection/>} />
                <Route path="/onlineOrder" element={<HighlightsSection/>}/>
                <Route path="/login" element={<LoginSection/>} />
                <Route path="/pay" element={<PaymentSection/>} />
            </Routes>
        </div>
    )
}

export default Header;