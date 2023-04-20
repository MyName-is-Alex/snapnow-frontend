import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import authService from "./api-authorization/authenticationService";
import * as Network from "expo-network";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthenticationNavigator from "./components/AuthenticationNavigator";
import { NativeBaseProvider } from "native-base";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

    useEffect(() => {
        setIsAuthenticated(authService.isAuthenticated());
    }, []);

    return (
        <NativeBaseProvider>
            {!isAuthenticated ? (
                <AuthenticationNavigator />
            ) : (
                <View>
                    <Text></Text>
                </View>
            )}
        </NativeBaseProvider>
    );

    if (!isAuthenticated) {
        return (
            <NativeBaseProvider>
                <AuthenticationNavigator />
            </NativeBaseProvider>
        );
    }
    return (
        <View>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
