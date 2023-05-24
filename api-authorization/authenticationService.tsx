import { apiRoutes } from "../apiRoutes";
import axios from "axios";
import { expoSecureStore } from "./expoSecureStore";
import { Cookie } from "../types/AuthTypes";
import jwt_decode from "jwt-decode";
import { JwtTokenType } from "../types/AuthTypes";

const registerUser = (bodyFormData: FormData) => {
    return axios.post(apiRoutes.Register, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
};
const loginUser = (bodyFormData: FormData) => {
    return axios.post(apiRoutes.Login, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
};

const logout = async () => {
    await expoSecureStore.deleteItem("Auth");
    return axios.post(apiRoutes.Logout);
};

const isAuthenticated = async (): Promise<boolean> => {
    try {
        let result = await expoSecureStore.getValueFor("Auth");

        if (result) {
            const cookie: Cookie = JSON.parse(result) as Cookie;
            const expireDate = new Date(cookie.expireDate);
            const dateNow: Date = new Date();

            if (expireDate < dateNow) {
                expoSecureStore.deleteItem("Auth");
                return false;
            }

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getCurrentUserEmail = async (): Promise<string | null> => {
    const user = await expoSecureStore.getValueFor("Auth");

    if (user) {
        const decodedToken: JwtTokenType = jwt_decode(JSON.parse(user)["value"]);
        return decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    }

    return null;
};

const authService = {
    isAuthenticated,
    registerUser,
    loginUser,
    logout,
    getCurrentUserEmail,
};

export default authService;
