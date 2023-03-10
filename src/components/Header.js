
import '../App.css'
import React from "react";
import logo from "../assets/logo.png"
import AboutSection from "./AboutSection.js"
import ReserveSection from "./ReserveSection.js"
import LoginSection from "./LoginSection.js"
import {Routes, Route, Link} from 'react-router-dom';
import HighlightsSection from './HighlightsSection';
import PaymentSection from './PaymentSection';
import { useRef, useEffect } from 'react';



function Header(){
    const headerRef = useRef(null);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          const headerElement = headerRef.current;
          console.log(headerElement)
          if (!headerElement) {
            return;
        }
          if (prevScrollPos > currentScrollPos) {
            headerElement.style.transform = "translateY(0)";
        } else {
            headerElement.style.transform = "translateY(-200px)";
        }
          prevScrollPos = currentScrollPos;
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
         }
      }, []);

      const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return(
        <div ref={headerRef} className="header" id="navbar" >
            <Link to="/">
            <img
            src={logo}
            alt="Little Lemon logo"
            width={230}
            />
            </Link>
            <nav>
                <ul className="navbar">
                    <Link to="/" className="nav-item"  onClick={handleClick("navbar")}/*onMouseOver={changeBackground}*/>Home </Link>
                    <Link to="/about" className="nav-item" onClick={handleClick("about")}>About</Link>
                    <Link to="/onlineOrder" className="nav-item" onClick={handleClick("onlineOrders")}>Order Online</Link>
                    <Link to="/reservations" className="nav-item" >Reservations</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                </ul>
            </nav>
            <Routes>
                    <Route path="/" element={<Header/>}/>
                    <Route path="about" element={<AboutSection/>} />
                    <Route path="onlineOrder" element={<HighlightsSection/>}/>
                    <Route path="/reservations" element={<ReserveSection/>} />
                    <Route path="/login" element={<LoginSection/>} />
                    <Route path="/pay" element={<PaymentSection/>} />
            </Routes>
        </div>
    )
}

export default Header;