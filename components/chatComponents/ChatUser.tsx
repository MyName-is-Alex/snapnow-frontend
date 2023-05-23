import { Box, HStack, Text, Flex } from "native-base";
import { UserType } from "../../types/UserType";
import { Touchable, TouchableOpacity } from "react-native";

const ChatUser = ({ user }: { user: UserType }) => {
    return (
        <Flex
            h={76.63}
            direction="row"
            alignItems={"center"}
            borderBottomStyle={"solid"}
            borderBottomColor={"secondaryWhite.500"}
            borderBottomWidth={"1px"}>
            <Box ml={5} backgroundColor={"secondaryWhite.500"} h={63} w={63} borderRadius={50}></Box>
            <Flex ml={2} direction="column" h={76.63} justifyContent={"center"}>
                <Text fontWeight={"200"} fontSize={"name"}>
                    {user.email}
                </Text>
                <Flex direction="row" alignItems={"center"}>
                    <Box backgroundColor={"primaryPurple.500"} w={15} h={15} borderRadius={4}></Box>
                    <Text ml={2} color={"primaryPurple.500"}>
                        read state
                    </Text>
                    <Text ml={2} color={"secondaryWhite.500"}>
                        10 m
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ChatUser;
