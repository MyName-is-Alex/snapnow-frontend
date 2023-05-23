import axios from "axios";
import { apiRoutes } from "../apiRoutes";
import authHeader from "../api-authorization/authHeader";

const getFollowedUsers = async () => {
    const header = await authHeader();

    const response = await axios.get(apiRoutes.FollowedUsers, header);
    const jsonResponse = await response.data;

    return jsonResponse;
};

const userStore = {
    getFollowedUsers,
};

export default userStore;
