import React, {useState} from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputRightElement, Text, HStack, Divider
} from '@chakra-ui/react';
import {z} from 'zod';
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import { useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {OAuthButtonGroup} from "./OAuthButtonGroup";

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

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);
    return (
        <Flex width="full" align="center" justifyContent="center" mt={15}>
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading size={{ base: 'xs', md: 'lg' }}>Log in to your account</Heading>
                    <HStack spacing="1" justify="center">
                        <Text color="muted">Don't have an account?</Text>
                        <Button variant="link" colorScheme="blue">
                            Sign up
                        </Button>
                    </HStack>
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
                            {/* TODO    Error message should be in red color but show in black color */}
                            {errors.email && <p className="text-danger" color="red">{errors.email.message}</p>}
                        </FormControl>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="*******"
                                    size="lg"
                                    {...register('password')}
                                    // onChange={event => setPassword(event.currentTarget.value)}
                                />
                                <InputRightElement width="3rem">
                                    <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                                        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button width="full" mt={4} type="submit" variant="outline">
                            Sign In
                        </Button>
                    </form>
                    <HStack mt={5}>
                        <Divider />
                        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                            or continue with
                        </Text>
                        <Divider />
                    </HStack>
                    <OAuthButtonGroup />
                </Box>
            </Box>
        </Flex>
    );
};
export default Login;