import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";
import { appPaths } from "./applicationPaths";
import ChatList from "../components/chatComponents/ChatList";
import { Screen } from "../types/screenTypes";
import CustomHeader from "../components/CustomHeader";

const screens: Screen[] = [
    {
        name: appPaths.Chat,
        component: ChatList,
        options: {
            headerTitle: "Chat",
            headerStyle: {
                backgroundColor: "primaryPurple.500",
            },
            header: CustomHeader,
        },
        headerColors: {
            titleText: "primaryWhite.500",
            icons: "primaryYellow.500",
            buttonBackground: "secondaryPurple.500",
            background: "primaryPurple.500",
        },
    },
];

export default screens;
