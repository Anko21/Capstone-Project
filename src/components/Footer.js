import React from "react";
import logofooterwhite from "./images/logofooterwhite.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faInstagram,faTiktok,} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    const handleClick=()=>{}

    const socials = [
        {
          icon: faEnvelope,
          url: "mailto: hello@example.com",
        },
        {
          icon: faFacebook,
          url: "https://facebook.com",
        },
        {
          icon: faInstagram,
          url: "https://www.instagram.com",
        },
        {
          icon: faTiktok,
          url: "https://www.tiktok.com",
        },
      ];

    const footerStyle={
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
        overflow: "hidden",
        justifyContent :"center",
        marginTop:"1em",
        backgroundColor:"#495E57",
        padding: "10px",
    }
    const liStyle={
        color:"#EDEFEE",
        listStyleType:"none",
        padding: "5px 1em 0 2em",
        fontFamily:"Karla",
        fontSize:"18px",
        fontWeight:"medium",
        alignItems:"left",
        justifyContent:"space-between",
    }
    return(
            <footer style={footerStyle}>
                <img
                src={logofooterwhite}
                alt="Little Lemon logo"
                />
                <ul>
                    <li style={liStyle}><h1><strong>Doormat Navigation</strong></h1></li>
                    <li style={liStyle}><a href="." onClick={handleClick()}>Home </a></li>
                    <li style={liStyle}><a href="/about" onClick={handleClick()}>About</a></li>
                    <li style={liStyle}><a href="/menu" onClick={handleClick()}>Menu</a></li>
                    <li style={liStyle}><a href="/reservations" onClick={handleClick()}>Reservations</a></li>
                    <li style={liStyle}><a href="/onlineOrder" onClick={handleClick()}>Order Online</a></li>
                    <li style={liStyle}><a href="/login" onClick={handleClick()} >Login</a></li>
                </ul>
                <ul>
                    <li style={liStyle}><h1><strong>Contact details</strong></h1></li>
                    <li style={liStyle}><p>Phone number : 07546854669 </p></li>
                    <li style={liStyle}><p>Email : littlelemon@hotmail.com</p></li>
                </ul>

                <ul>
                    <li style={liStyle}><h1><strong>Social Media</strong></h1></li>
                    <li style={liStyle} >
                        {socials.map(({url,icon}) => {
                            return (
                                <a key={url} href={url}>
                                <FontAwesomeIcon icon={icon} key={url} size="2x"/>
                                </a>)
                            })}
                    </li>
                </ul>
            </footer>
    )
}

export default Footer;