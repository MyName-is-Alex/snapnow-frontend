import axios from "axios";
import { apiRoutes } from "../apiRoutes";

export type Role = {
    concurrencyStamp: string;
    id: string;
    name: string;
    normalizedName: string;
};

const getAllRoles = async () => {
    const response = await axios.get(apiRoutes.ListRoles);
    const jsonResponse = await response.data;

    return jsonResponse;
};

const roleStore = {
    getAllRoles,
};

export default roleStore;
