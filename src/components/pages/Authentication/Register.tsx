import React from "react";
import {
    Box,
    Button, Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Text
} from "@chakra-ui/react";
import {OAuthButtonGroup} from "./OAuthButtonGroup";
import Password from "../../Fileds/Password";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import countries from "../../../countries";


const schema = z.object({
    firstName: z.string().min(3, {message: "First name must be at least 3 characters."}),
    lastName: z.string().min(3, {message: "Last name must be at least 3 characters."}),
    username: z.string().min(5, {message: "Username must be at least 5 characters."}),
    email: z.string().email().min(5, {message: "Email must be at least 5 characters."}),
    password: z.string().min(6, {message: "Password must be at least 6 characters."}),
    phone: z.number().min(10, {message: "Phone must be at least 10 digits."}),
    datePfBirth: z.date(),
    gender: z.string({
        required_error: "Gender is required",
    }),
    country_id: z.enum(countries, {
        errorMap: () => ({
            message: "Country is Required."
        })
    })
});

type FormData = z.infer<typeof schema>;

interface FormProps {
    onSubmit: (data: FormData) => void;
}

const Register = ({onSubmit}: FormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(schema)});
    return (
        <Box width="100%" justifyContent="center" mt={15}>
            <Box p={8} maxWidth="100%" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading size={{base: 'xs', md: 'lg'}}>Create New Account</Heading>
                    <HStack spacing="1" justify="center">
                        <Text color="muted">Already du have account ?</Text>
                        <Button variant="link" colorScheme="blue">
                            Sign in
                        </Button>
                    </HStack>
                </Box>
                <Box my={4} textAlign="left" width={500}>
                    <form onSubmit={handleSubmit(data => {
                        onSubmit(data);
                        console.log(data)
                        reset();
                    })}>
                       <HStack width="120%">
                           <FormControl isRequired>
                               <FormLabel>First Name</FormLabel>
                               <Input    {...register('firstName')} name="firstName" placeholder="enter first name"/>
                               {/* TODO    Error message should be in red color but show in black color */}
                               {errors.firstName && <p className="text-danger" color="red">{errors.firstName.message}</p>}
                           </FormControl>
                           <FormControl isRequired>
                               <FormLabel>Last Name</FormLabel>
                               <Input    {...register('lastName')} name="lastName" placeholder="enter last name"/>
                               {/* TODO    Error message should be in red color but show in black color */}
                               {errors.lastName && <p className="text-danger" color="red">{errors.lastName.message}</p>}
                           </FormControl>
                       </HStack>
                        <HStack width="120%" mt={5}>
                            <FormControl isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input    {...register('username')} name="username" placeholder="enter username"/>
                                {/* TODO    Error message should be in red color but show in black color */}
                                {errors.username && <p className="text-danger" color="red">{errors.username.message}</p>}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input    {...register('email')} name="email" placeholder="example@gmail.com"/>
                                {/* TODO    Error message should be in red color but show in black color */}
                                {errors.email && <p className="text-danger" color="red">{errors.email.message}</p>}
                            </FormControl>
                        </HStack>
                        <HStack width="120%" mt={5}>
                            <FormControl isRequired>
                                <FormLabel>Username</FormLabel>
                                <Input    {...register('username')} name="username" placeholder="enter username"/>
                                {/* TODO    Error message should be in red color but show in black color */}
                                {errors.username && <p className="text-danger" color="red">{errors.username.message}</p>}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input    {...register('email')} name="email" placeholder="example@gmail.com"/>
                                {/* TODO    Error message should be in red color but show in black color */}
                                {errors.email && <p className="text-danger" color="red">{errors.email.message}</p>}
                            </FormControl>
                        </HStack>
                        <Password register={{...register('password')}}/>

                        <Button width="full" mt={4} type="submit" variant="outline">
                            Submit
                        </Button>
                    </form>
                    <HStack mt={5}>
                        <Divider/>
                        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                            or continue with
                        </Text>
                        <Divider/>
                    </HStack>
                    <OAuthButtonGroup/>
                </Box>
            </Box>
        </Box>
    );
}
export default Register;