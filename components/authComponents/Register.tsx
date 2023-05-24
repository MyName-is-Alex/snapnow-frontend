import { useEffect, useState } from "react";
import { ScreenProps } from "../../api-authorization/authScreens";
import {
    Box,
    FormControl,
    Input,
    Stack,
    Divider,
    Text,
    Icon,
    CheckIcon,
    Pressable,
    Select,
    Link,
    HStack,
    Button,
    ScrollView,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { appAuthPaths } from "../../api-authorization/applicationAuthorizationPaths";
import { Role } from "../../types/RoleType";
import roleStore from "../../stores/roleStore";
import { RegisterDataType } from "../../types/AuthTypes";
import authService from "../../api-authorization/authenticationService";

const Register = ({ navigation }: ScreenProps) => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedRole, setSelectedRow] = useState<string>("User");
    const [backendError, setBackendError] = useState<boolean>(false);

    const [roles, setRoles] = useState<Role[]>();

    // bring roles from the db
    useEffect(() => {
        setRoles([]);
        roleStore
            .getAllRoles()
            .then((result) => {
                result.result.map((role: Role) => {
                    setRoles((roles) => [...(roles ?? []), role]);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // form state
    const formData = new FormData();
    const [registerData, setRegisterData] = useState<RegisterDataType>({
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        role: roles?.find((role) => role.name == "User"),
    });

    const registerUser = () => {
        let key: keyof typeof registerData;

        for (key in registerData) {
            // console.log(registerData[key]);
            if (key === "role") {
                formData.append(key, JSON.stringify(registerData[key]));
            } else {
                formData.append(key, registerData[key]);
            }
        }
        authService
            .registerUser(formData)
            .then((response) => {
                navigation.navigate(appAuthPaths.ConfirmEmail, { emailAddress: registerData.email });
            })
            .catch((err) => {
                setBackendError(true);
                console.log(err.response.data);
            });
    };

    return (
        <ScrollView>
            <Stack
                space={2.5}
                alignSelf="center"
                alignItems="center"
                px="4"
                safeArea
                mt="10"
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
                                setRegisterData({ ...registerData, email: event.nativeEvent.text });
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
                                setRegisterData({ ...registerData, password: event.nativeEvent.text });
                            }}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl mb="5">
                        <FormControl.Label>Confirm Password</FormControl.Label>
                        <Input
                            color={"pressedBlue.500"}
                            size={"2xl"}
                            w={{
                                base: "80%",
                                md: "25%",
                            }}
                            type={show ? "text" : "password"}
                            placeholder="confirm password..."
                            InputLeftElement={
                                <Icon as={<MaterialIcons name="repeat" />} size={5} ml="2" color="primaryBlue.500" />
                            }
                            onChange={(event) => {
                                setRegisterData({ ...registerData, confirmPassword: event.nativeEvent.text });
                            }}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl mb="5">
                        <FormControl.Label>Phone Number</FormControl.Label>
                        <Input
                            color={"pressedBlue.500"}
                            size={"2xl"}
                            w={{
                                base: "80%",
                                md: "25%",
                            }}
                            type={"text"}
                            placeholder="..."
                            InputLeftElement={
                                <Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="primaryBlue.500" />
                            }
                            onChange={(event) => {
                                setRegisterData({ ...registerData, phoneNumber: event.nativeEvent.text });
                            }}
                        />
                    </FormControl>
                </Box>
                <Box w={{ base: "80%" }}>
                    <FormControl mb="5" isDisabled={false}>
                        <FormControl.Label>Role</FormControl.Label>
                        <Select
                            color={"primaryBlue.500"}
                            selectedValue={selectedRole}
                            size={"2xl"}
                            w={{
                                base: "100%",
                                md: "25%",
                            }}
                            placeholder="Choose the type of your account."
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={(itemValue) => {
                                setRegisterData({ ...registerData, role: roles?.find((x) => x.name === itemValue) });
                                setSelectedRow(itemValue);
                            }}>
                            {roles?.map((role) => (
                                <Select.Item key={role.id} label={role.name} value={role.name} />
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box display={!backendError ? "none" : "default"}>
                    <Text color="primaryPurple.500">Something went wrong.</Text>
                </Box>
                <Box>
                    <Button onPress={registerUser} _pressed={{ bg: "pressedBlue.500" }} bg="primaryBlue.500">
                        Register
                    </Button>
                </Box>
                <Divider />
                <Box>
                    <HStack>
                        <Text color={"secondaryWhite.500"}>If you already have an account press here - </Text>
                        <Link
                            onPress={() => {
                                navigation.navigate(appAuthPaths.Login);
                            }}>
                            <Text underline color={"primaryBlue.500"}>
                                login page
                            </Text>
                        </Link>
                    </HStack>
                </Box>
            </Stack>
        </ScrollView>
    );
};

export default Register;
