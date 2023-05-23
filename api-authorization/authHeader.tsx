import { expoSecureStore } from "./expoSecureStore";

export default async function authHeader() {
    const user = await expoSecureStore.getValueFor("Auth");
    const parsedUser = JSON.parse(user ?? "");

    if (user) {
        return { headers: { Authorization: `Bearer ${parsedUser["value"]}` } };
    } else {
        return { headers: {} };
    }
}
