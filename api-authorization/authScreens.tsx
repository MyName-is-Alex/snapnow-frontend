import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { FC, ComponentType } from "react";
import { appAuthPaths } from "./applicationAuthorizationPaths";
import Login from "../components/Login";
import Register from "../components/Register";

export type ScreenProps = {
    navigation: NavigationProp<any>;
    route: any;
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
        component: Login,
        options: {
            headerTitle: "Login",
        },
    },
];

export default screens;
