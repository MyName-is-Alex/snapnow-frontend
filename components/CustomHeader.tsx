import { Button, Box, Text, Icon, HStack } from "native-base";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CustomHeader = (props: NativeStackHeaderProps) => {
    return (
        <HStack
            // @ts-ignore
            bgColor={props.options.headerStyle.backgroundColor}
            h="90"
            paddingTop={"45"}
            justifyContent={"space-around"}>
            <Box display={"flex"} flexDirection={"row"} h={"34px"} w={"78px"} justifyContent={"space-between"}>
                <Button
                    shadow={5}
                    _pressed={{ bg: "primaryPurple.500" }}
                    bg={"secondaryPurple.500"}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon as={<Feather name="command" />} size={6} color="black" />
                </Button>
                <Button
                    shadow={5}
                    _pressed={{ bg: "primaryPurple.500" }}
                    bg={"secondaryPurple.500"}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon as={<MaterialIcons name="search" />} size={6} color="primaryYellow.500" />
                </Button>
            </Box>
            {/* MIDDLE */}
            <Box>
                <Text
                    color={"primaryWhite.500"}
                    textAlign={"center"}
                    fontFamily={"heading"}
                    fontWeight={"400"}
                    fontSize={"title"}>
                    {props.route.name}
                </Text>
            </Box>
            {/* MIDDLE */}
            <Box display={"flex"} flexDirection={"row"} h={"34px"} w={"78px"} justifyContent={"space-between"}>
                <Button
                    shadow={5}
                    _pressed={{ bg: "primaryPurple.500" }}
                    bg={"secondaryPurple.500"}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon as={<MaterialIcons name="add" />} size={7} color="primaryYellow.500" />
                </Button>
                <Button
                    shadow={5}
                    _pressed={{ bg: "primaryPurple.500" }}
                    bg={"secondaryPurple.500"}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon as={<Entypo name="dots-three-horizontal" />} size={7} color="primaryYellow.500" />
                </Button>
            </Box>
        </HStack>
    );
};

export default CustomHeader;
