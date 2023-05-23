import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { appAuthPaths } from "./applicationAuthorizationPaths";
import Login from "../components/authComponents/Login";
import Register from "../components/authComponents/Register";
import ConfirmEmail from "../components/authComponents/ConfirmEmail";

export type ScreenProps = {
    navigation: NavigationProp<any>;
    route: any;
    options: any;
};

export type ScreenOptions = {
    headerTitle: string;
    headerTitleStyle: any;
    headerStyle: any;
};

export type Screen = {
    name: string;
    component: ComponentType<ScreenProps>;
    options: NativeStackNavigationOptions;
};

const screens: Screen[] = [
    {
        name: appAuthPaths.Register,
        component: Register,
        options: {
            headerTitle: "Register",
        },
    },
    {
        name: appAuthPaths.Login,
        // @ts-ignore
        component: Login,
        options: {
            headerTitle: "Login",
        },
    },
    {
        name: appAuthPaths.ConfirmEmail,
        // @ts-ignore
        component: ConfirmEmail,
        options: {
            headerTitle: "Confirm email",
        },
    },
];

export default screens;
