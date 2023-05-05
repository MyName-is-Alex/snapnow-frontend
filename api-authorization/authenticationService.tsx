import { apiRoutes } from "../apiRoutes";
import axios from "axios";
import { Role } from "../stores/roleStore";
import { expoSecureStore } from "./expoSecureStore";

export type RegisterDataType = {
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    role: Role | undefined;
};
export type LoginDataType = {
    email: string;
    password: string;
};
export type Cookie = {
    key: string;
    value: string;
    expireDate: string;
};

const registerUser = (bodyFormData: FormData) => {
    return axios.post(apiRoutes.Register, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
};
const loginUser = (bodyFormData: FormData) => {
    return axios.post(apiRoutes.Login, bodyFormData, { headers: { "Content-Type": "multipart/form-data" } });
};

const logout = async () => {
    await expoSecureStore.deleteItem("Auth");
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
            console.log("eeeeee");

            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const authService = {
    isAuthenticated,
    registerUser,
    loginUser,
    logout,
};

export default authService;
