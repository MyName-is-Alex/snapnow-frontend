import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens, { Screen } from "../api-authorization/authScreens";
import Login from "./Login";
import Register from "./Register";

const AuthStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator initialRouteName="Register">
                {screens.map((screen: Screen) => (
                    <AuthStack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                ))}
            </AuthStack.Navigator>
        </NavigationContainer>
    );
};

export default AuthenticationNavigator;
