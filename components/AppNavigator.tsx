import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens, { Screen } from "../screen/appScreens";
import CustomHeader from "./CustomHeader";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <AppStack.Navigator initialRouteName="Register" screenOptions={{ header: CustomHeader }}>
            {screens.map((screen: Screen) => (
                <AppStack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                />
            ))}
        </AppStack.Navigator>
    );
};

export default AppNavigator;
