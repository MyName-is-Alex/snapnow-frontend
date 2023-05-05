import { Box, Text, Button } from "native-base";
import { ScreenProps } from "../../api-authorization/authScreens";
import { NavigationProp } from "@react-navigation/native";
import { appAuthPaths } from "../../api-authorization/applicationAuthorizationPaths";

const ConfirmEmail = ({ navigation, route }: ScreenProps) => {
    const goToLogin = () => {
        navigation.navigate(appAuthPaths.Login);
    };

    return (
        <Box my="1/3">
            <Text fontSize={"2xl"} mx="1/6">
                An email confirmation link was sent to <Text color="primaryBlue.500">{route.params?.emailAddress}</Text>
            </Text>
            <Text></Text>
            <Text fontSize={"md"} mt="1/2" mx="1/6">
                Press on the login button after you have confirmed your email.
            </Text>
            <Button
                _pressed={{ bg: "pressedBlue.500" }}
                bg="primaryBlue.500"
                mt={"3"}
                mx="1/6"
                w={"25%"}
                onPress={goToLogin}>
                Login
            </Button>
        </Box>
    );
};

export default ConfirmEmail;
