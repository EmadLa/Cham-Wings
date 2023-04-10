import React from "react";
import {HStack, Image} from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return (
        <HStack padding="10px">
          <Image />
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;