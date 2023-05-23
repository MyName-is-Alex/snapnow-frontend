import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "../screens/appScreens";
import CustomHeader from "./CustomHeader";
import { Screen } from "../types/ScreenTypes";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStack.Navigator initialRouteName="Register">
            {screens.map((screen: Screen) => (
                <AppStack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                    initialParams={screen.headerColors}
                />
            ))}
        </AppStack.Navigator>
    );
};

export default AppNavigator;
