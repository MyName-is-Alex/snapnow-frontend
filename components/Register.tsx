import { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { ScreenProps } from "../api-authorization/authScreens";
import { HStack, Link } from "native-base";

import {
    Box,
    FormControl,
    Input,
    Stack,
    Divider,
    WarningOutlineIcon,
    Text,
    Icon,
    CheckIcon,
    Pressable,
    Select,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { appAuthPaths } from "../api-authorization/applicationAuthorizationPaths";

const Register = ({ navigation }: ScreenProps) => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedRole, setSelectedRow] = useState<string>("");

    return (
        <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
                base: "100%",
                md: "25%",
            }}>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Email address</FormControl.Label>
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />
                        }
                        placeholder="type here..."
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        type={show ? "text" : "password"}
                        InputRightElement={
                            <Pressable onPress={() => setShow(!show)}>
                                <Icon
                                    as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                                    size={5}
                                    mr="2"
                                    color="muted.400"
                                />
                            </Pressable>
                        }
                        placeholder="password..."
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        type={show ? "text" : "password"}
                        placeholder="confirm password..."
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Phone Number</FormControl.Label>
                    <Input
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        type={show ? "text" : "password"}
                        placeholder="phone number..."
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl mb="5">
                    <FormControl.Label>Role</FormControl.Label>
                    <Select
                        selectedValue={selectedRole}
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        accessibilityLabel="User"
                        placeholder="Choose the type of your account."
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setSelectedRow(itemValue)}>
                        <Select.Item label="UX Research" value="ux" />
                    </Select>
                </FormControl>
            </Box>
            <Divider />
            <Box>
                <HStack>
                    <Text>If you already have an account press here - </Text>
                    <Link
                        onPress={() => {
                            navigation.navigate(appAuthPaths.Login);
                        }}>
                        login page
                    </Link>
                </HStack>
            </Box>
        </Stack>
    );
};

export default Register;
