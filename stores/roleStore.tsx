import axios from "axios";
import { apiRoutes } from "../apiRoutes";

const getAllRoles = async () => {
    const response = await axios.get(apiRoutes.ListRoles);
    const jsonResponse = await response.data;

    return jsonResponse;
};

const roleStore = {
    getAllRoles,
};

export default roleStore;
