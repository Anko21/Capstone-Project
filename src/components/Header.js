import React from "react";
import logo from "./images/logo.png"

function Header(){
   
    const navStyle={
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
        overflow: "hidden",
        justifyContent :"center",
        marginTop:"1em",
        gap:"20px",
        //backgroundColor:"#EDEFEE",

        }
    const liStyle={
        listStyleType:"none",
        display:'inline',
        padding : "15px",
        justifyContent:"center",
        color:"333333" ,
        fontFamily:"Karla" ,
        fontSize: "18px",
        fontWeight:"bold",
        }

    const handleClick=()=>{}
//need to add function and header hide/show and 
    return(
        <div>
            <nav style={navStyle}>
                <img
                    src={logo}
                    alt="Little Lemon logo"
                    width={250}
                    maxWidth="100%"
                    minWidth={150}
                    />
                <ul style={{paddingTop:"25px"}}>
                    <li style={liStyle}><a  href="." onClick={handleClick()}>Home </a></li>
                    <li style={liStyle}><a  href="/about" onClick={handleClick()}>About</a></li>
                    <li style={liStyle}><a   href="/menu" onClick={handleClick()}>Menu</a></li>
                    <li style={liStyle}><a  href="/reservations" onClick={handleClick()}>Reservations</a></li>
                    <li style={liStyle}><a  href="/onlineOrder" onClick={handleClick()}>Order Online</a></li>
                    <li style={liStyle}><a  href="/login" onClick={handleClick()} >Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;