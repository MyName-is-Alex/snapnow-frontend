import React, { useEffect, useState } from "react";
import authService from "./api-authorization/authenticationService";
import AuthenticationNavigator from "./components/authComponents/AuthenticationNavigator";
import { NativeBaseProvider } from "native-base";
import theme from "./themes/customTheme";
import * as Font from "expo-font";
import { customFonts } from "./fonts/customFonts";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./components/Loading";
import AppNavigator from "./components/AppNavigator";
import { AppContext } from "./appContext";
import { expoSecureStore } from "./api-authorization/expoSecureStore";
import userStore from "./stores/userStore";

export default function App() {
    const [appLoading, setAppLoading] = useState<boolean>(true);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        Font.loadAsync(customFonts).then(() => {
            setAppLoading(false);
        });

        authService.isAuthenticated().then((result) => {
            setIsAuthenticated(result);
        });
    }, []);

    return (
        <NativeBaseProvider theme={theme}>
            {appLoading ? (
                <Loading />
            ) : (
                <AppContext.Provider
                    value={{ isAuthenticated: isAuthenticated, setIsAuthenticated: setIsAuthenticated }}>
                    <NavigationContainer>
                        {isAuthenticated ? <AppNavigator /> : <AuthenticationNavigator />}
                    </NavigationContainer>
                </AppContext.Provider>
            )}
        </NativeBaseProvider>
    );
}
