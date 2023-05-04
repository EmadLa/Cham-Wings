import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './login.module.css';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button, Text, HStack, Divider, Image, VStack
} from '@chakra-ui/react';
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {OAuthButtonGroup} from "./OAuthButtonGroup";
import Password from "../../Fileds/Password";

const schema = z.object({
    email: z.string().email().min(5, {message: "Email must be at least 5 characters."}),
    password: z.string().min(6, {message: "Password must be at least 6 characters."}),
});

type FormData = z.infer<typeof schema>;

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Login = ({onSubmit}: FormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(schema)});

    return (
        <Flex width="full" align="center" justifyContent="center" mt={15}>
            <VStack>
                <Image className={classes.image}
                       src="https://chamwings.com/wp-content/uploads/2016/07/company_logo-2.png"/>
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Box textAlign="center">
                        <Heading size={{base: 'xs', md: 'lg'}}>Log in to your account</Heading>
                    </Box>
                    <Box my={4} textAlign="left" width={350}>
                        <form onSubmit={handleSubmit(data => {
                            onSubmit(data);
                            console.log(data)
                            reset();
                        })}>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input    {...register('email')} name="email" placeholder="example@gmail.com"/>
                                {errors.email && <p className="text-danger" color="red">{errors.email.message}</p>}
                            </FormControl>
                            <Password register={{...register('password')}}/>
                            <Link to="home">
                                <Button width="full" mt={4} type="submit" variant="outline">
                                    Sign In
                                </Button>
                            </Link>

                            {/*<HStack mt={5}>*/}
                            {/*    <Divider/>*/}
                            {/*    <Text fontSize="sm" whiteSpace="nowrap" color="muted">*/}
                            {/*        or continue with*/}
                            {/*    </Text>*/}
                            {/*    <Divider/>*/}
                            {/*</HStack>*/}
                            {/*<Button>*/}
                            {/*    <Link to="/topbar"> Topbar</Link>*/}
                            {/*</Button>*/}
                        </form>

                    </Box>
                </Box>
            </VStack>
        </Flex>
    );
};
export default Login;

// <HStack spacing="1" justify="center">
//     <Text color="muted">Don't have an account?</Text>
//     <Button variant="link" colorScheme="blue">
//         Sign up
//     </Button>
// </HStack>

// <HStack mt={5}>
//     <Divider/>
//     <Text fontSize="sm" whiteSpace="nowrap" color="muted">
//         or continue with
//     </Text>
//     <Divider/>
// </HStack>
// <OAuthButtonGroup/>