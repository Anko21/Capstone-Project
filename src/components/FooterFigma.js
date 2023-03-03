import React from "react";
import {Box, Flex, HStack, Image, VStack} from "@chakra-ui/react";
import logofooterwhite from "./assets/logofooterwhite.png"

function Footer(){
    const handleClick=()=>{}
    return(
        <Box
        backgroundColor="#495E57"
        >
            <footer>
                <Flex
                margin="0 auto"
                justifyContent="center"
                alignItems="center"
                maxWidth="1024px"
                height={380}
                >
            <HStack
            color="#EDEFEE"
            fontFamily="Karla"
            fontSize={18}
            fontWeight="medium"
            alignItems="left"
            justifyContent="space-between"
            spacing={10}>
                <Image
                src={logofooterwhite}
                alt="Little Lemon logo"
                />
                <VStack>
                    <h1><strong>Doormat Navigation</strong></h1>
                    <a href="." onClick={handleClick()}>Home </a>
                    <a href="/about" onClick={handleClick()}>About</a>
                    <a href="/menu" onClick={handleClick()}>Menu</a>
                    <a href="/reservations" onClick={handleClick()}>Reservations</a>
                    <a href="/onlineOrder" onClick={handleClick()}>Order Online</a>
                    <a href="/login" onClick={handleClick()} >Login</a>
                </VStack>
                <VStack
                alignItems="left">
                <h1><strong>Contact details</strong></h1>
                <p>Phone number : #########</p>
                <p>Email : LittleLemon@hotmail.com</p>
                </VStack>
                <VStack
                alignItems="left">
                <h1><strong>Social Media</strong></h1>
                </VStack>
            </HStack>
            </Flex>
            </footer>
        </Box>
    )
}

export default Footer;