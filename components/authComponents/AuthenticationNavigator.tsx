import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens, { Screen } from "../../api-authorization/authScreens";

const AuthStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
    return (
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
    );
};

export default AuthenticationNavigator;
