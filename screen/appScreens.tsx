import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { appPaths } from "./applicationPaths";
import ChatList from "../components/chatComponents/ChatList";

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
        name: appPaths.Chat,
        component: ChatList,
        options: {
            headerTitle: "Chat",
            headerStyle: {
                backgroundColor: "primaryPurple.500",
            },
        },
    },
];

export default screens;
