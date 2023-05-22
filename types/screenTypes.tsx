import { NavigationProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ComponentType } from "react";

export type ScreenProps = {
    navigation: NavigationProp<any>;
    route: any;
};

export type HeaderColors = {
    titleText: string;
    icons: string;
    buttonBackground: string;
    background: string;
};

export type Screen = {
    name: string;
    component: ComponentType<ScreenProps>;
    options: NativeStackNavigationOptions;
    headerColors: HeaderColors;
};
