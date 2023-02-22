import React from "react";
import logo from "./images/logo.png"
import { Box, HStack, VStack, Image } from "@chakra-ui/react";


function Header(){

    const handleClick=()=>{}
//need to add function and header hide/show and 


    return(
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="EDEFEE"
        //id="header"
        >
            <Box color="333333" maxWidth="1280px" margin="0 auto" fontFamily="Karla" fontSize={18} fontWeight="bold"> 
                <HStack
                justifyContent="center"
                alignItems="center"
                py={4}
                spacing={20}
                >
                    <Image
                    src={logo}
                    alt="Little Lemon logo"
                    width={250}
                    maxWidth="100%"
                    minWidth={150}
                    />

                    <nav>
                        <HStack
                        alignContent="space-around"
                        spacing={10}>
                            <a href="." onClick={handleClick()}>Home </a>
                            <a href="/about" onClick={handleClick()}>About</a>
                            <a href="/menu" onClick={handleClick()}>Menu</a>
                            <a href="/reservations" onClick={handleClick()}>Reservations</a>
                            <a href="/onlineOrder" onClick={handleClick()}>Order Online</a>
                            <a href="/login" onClick={handleClick()} >Login</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header;