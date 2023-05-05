import { HStack, Spinner, Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const Loading = () => {
    return (
        <SafeAreaView>
            <Box height={"full"} justifyContent="center">
                <Spinner size="lg" color="primaryPurple.500" />
            </Box>
        </SafeAreaView>
    );
};

export default Loading;
