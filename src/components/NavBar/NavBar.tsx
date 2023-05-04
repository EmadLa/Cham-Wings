import React from "react";
import {HStack, Image, Text} from "@chakra-ui/react";
import classes from '../NavBar/navbar.module.css'

const NavBar = () => {
    return (
        <HStack>
            {/*<Image  src="https://chamwings.com/wp-content/uploads/2016/07/company_logo-2.png"*/}
            {/*    boxSize="60px"*/}
            {/*/>*/}
            <Text className={classes.company_name}>Cham Wings</Text>
        </HStack>
    )
};

export default NavBar;