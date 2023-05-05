import * as SecureStore from "expo-secure-store";

async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null> {
    let result = await SecureStore.getItemAsync(key);
    return result;
}

async function deleteItem(key: string) {
    return SecureStore.deleteItemAsync(key);
}

export const expoSecureStore = { save, getValueFor, deleteItem };
