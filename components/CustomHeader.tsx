import { Button, Box, Text, Icon, HStack } from "native-base";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CustomHeader = (props: NativeStackHeaderProps) => {
    const routeParams = props.route.params;

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
                    // @ts-ignore
                    _pressed={{ bg: routeParams.buttonBackground, style: { opacity: 0.6 } }}
                    // @ts-ignore
                    bg={routeParams.buttonBackground}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon
                        as={<Feather name="command" />}
                        size={6}
                        //@ts-ignore
                        color={routeParams.icons}
                    />
                </Button>
                <Button
                    shadow={5}
                    // @ts-ignore
                    _pressed={{ bg: routeParams.buttonBackground, style: { opacity: 0.6 } }}
                    // @ts-ignore
                    bg={routeParams.buttonBackground}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon
                        as={<MaterialIcons name="search" />}
                        size={6}
                        //@ts-ignore
                        color={routeParams.icons}
                    />
                </Button>
            </Box>
            {/* MIDDLE */}
            <Box>
                <Text
                    //@ts-ignore
                    color={routeParams.titleText}
                    textAlign={"center"}
                    fontFamily={"heading"}
                    fontWeight={"400"}
                    fontSize={"title"}>
                    {props.route.name}
                </Text>
            </Box>
            {/* MIDDLE end */}
            <Box display={"flex"} flexDirection={"row"} h={"34px"} w={"78px"} justifyContent={"space-between"}>
                <Button
                    shadow={5}
                    //@ts-ignore
                    _pressed={{ bg: routeParams.buttonBackground, style: { opacity: 0.6 } }}
                    //@ts-ignore
                    bg={routeParams.buttonBackground}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon
                        as={<MaterialIcons name="add" />}
                        size={7}
                        //@ts-ignore
                        color={routeParams.icons}
                    />
                </Button>
                <Button
                    shadow={5}
                    //@ts-ignore
                    _pressed={{ bg: routeParams.buttonBackground, style: { opacity: 0.6 } }}
                    //@ts-ignore
                    bg={routeParams.buttonBackground}
                    borderRadius={50}
                    h={"34px"}
                    w={"34px"}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Icon
                        as={<Entypo name="dots-three-horizontal" />}
                        size={7}
                        //@ts-ignore
                        color={routeParams.icons}
                    />
                </Button>
            </Box>
        </HStack>
    );
};

export default CustomHeader;
