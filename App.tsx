import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import * as SQLite from "expo-sqlite";
import authService from "./api-authorization/authenticationService";
import * as Network from "expo-network";

export default function App() {
    authService.loginUser();
    const test = Network.getIpAddressAsync();
    test.then((result) => {
        console.log(result);
    });

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
