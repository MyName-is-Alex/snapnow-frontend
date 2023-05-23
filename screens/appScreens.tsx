import { appPaths } from "./applicationPaths";
import ChatList from "../components/chatComponents/ChatList";
import { Screen } from "../types/ScreenTypes";
import CustomHeader from "../components/CustomHeader";
import ChatBox from "../components/chatComponents/ChatBox";

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
    {
        name: appPaths.ChatBox,
        component: ChatBox,
        options: {
            headerTitle: "ChatBox",
            headerStyle: {
                backgroundColor: "baseWhite.500",
            },
            header: CustomHeader,
        },
        headerColors: {
            titleText: "textColorPrimary.500",
            icons: "textColorPrimary.500",
            buttonBackground: "primaryGrey.500",
            background: "baseWhite.500",
        },
    },
];

export default screens;
