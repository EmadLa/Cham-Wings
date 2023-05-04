import React, {useState} from "react";
import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

interface Props {
    register: any
}
const Password = ({register}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <FormControl isRequired mt={6}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="*******"
                    size="lg"
                    {...register}
                    // onChange={event => setPassword(event.currentTarget.value)}
                />
                {/*<InputRightElement width="3rem">*/}
                {/*    <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>*/}
                {/*        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}*/}
                {/*    </Button>*/}
                {/*</InputRightElement>*/}
            </InputGroup>
        </FormControl>
    );
};

export default Password