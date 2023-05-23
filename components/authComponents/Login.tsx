import React, { useContext, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { appAuthPaths } from "../../api-authorization/applicationAuthorizationPaths";
import { Box, FormControl, Input, Stack, Divider, Text, Icon, Pressable, Link, HStack, Button } from "native-base";
import { ScreenProps } from "../../api-authorization/authScreens";
import { LoginDataType, Cookie } from "../../types/AuthTypes";
import authService from "../../api-authorization/authenticationService";
import { expoSecureStore } from "../../api-authorization/expoSecureStore";
import { AppContext } from "../../appContext";
import Loading from "../Loading";

const Login = ({ navigation }: ScreenProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //context
    const { setIsAuthenticated } = useContext(AppContext)!;

    const [show, setShow] = useState<boolean>(false);
    const [backendError, setBackendError] = useState<boolean>(false);

    // form state
    const formData = new FormData();
    const [loginData, setLoginData] = useState<LoginDataType>({
        email: "",
        password: "",
    });

    const loginUser = async () => {
        setIsLoading(true);
        let key: keyof typeof loginData;
        for (key in loginData) {
            formData.append(key, loginData[key]);
        }

        try {
            const response = await authService.loginUser(formData);
            const tokenCookie = response.headers["set-cookie"]![0].split(";");
            const token: Cookie = {
                key: tokenCookie![0].split("=")[0],
                value: tokenCookie![0].split("=")[1],
                expireDate: tokenCookie![1].split("=")[1],
            };

            await expoSecureStore.save("Auth", JSON.stringify(token));
            setIsAuthenticated(true);
            setIsLoading(false);
        } catch (error) {
            setBackendError(true);
            setIsLoading(false);
            console.log(error);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Stack
            space={2.5}
            alignSelf="center"
            alignItems="center"
            px="4"
            safeArea
            mt="1/3"
            w={{
                base: "100%",
                md: "25%",
            }}>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Email Address</FormControl.Label>
                    <Input
                        color="pressedBlue.500"
                        size={"2xl"}
                        w={{
                            base: "80%",
                            md: "25%",
                        }}
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="primaryBlue.500" />
                        }
                        placeholder="type here..."
                        type="text"
                        onChange={(event) => {
                            setLoginData({ ...loginData, email: event.nativeEvent.text });
                        }}
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                        color="pressedBlue.500"
                        size={"2xl"}
                        w={{
                            base: "80%",
                            md: "25%",
                        }}
                        type={show ? "text" : "password"}
                        InputLeftElement={
                            <Pressable onPress={() => setShow(!show)}>
                                <Icon
                                    as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                                    size={5}
                                    ml="2"
                                    color="primaryBlue.500"
                                />
                            </Pressable>
                        }
                        placeholder="type here..."
                        onChange={(event) => {
                            setLoginData({ ...loginData, password: event.nativeEvent.text });
                        }}
                    />
                </FormControl>
            </Box>
            <Box display={!backendError ? "none" : "default"}>
                <Text color="primaryPurple.500">Something went wrong.</Text>
            </Box>
            <Box w="25%">
                <Button onPress={loginUser} _pressed={{ bg: "pressedBlue.500" }} bg="primaryBlue.500">
                    Login
                </Button>
            </Box>
            <Divider />
            <Box>
                <HStack>
                    <Text color={"secondaryWhite.500"}>If you don't have an account press here - </Text>
                    <Link
                        onPress={() => {
                            navigation.navigate(appAuthPaths.Register);
                        }}>
                        <Text underline color={"primaryBlue.500"}>
                            register page
                        </Text>
                    </Link>
                </HStack>
            </Box>
        </Stack>
    );
};

export default Login;
