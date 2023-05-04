import React from 'react';
import {Grid, GridItem, Show} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            // gridTemplateRows={'50px 1fr 30px'}
            // gridTemplateColumns={'150px 1fr'}
            // h='200px'
            // gap='1'
            // color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' bg='orange.300' area={'nav'}>
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem pl='2' bg='pink.300' area={'aside'}>
                    Aside
                </GridItem>
            </Show>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
        </Grid>
    );
};

export default Home;