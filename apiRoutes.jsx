export const prefix = process.env.NODE_ENV === "development" ? "https://b1eb-109-166-129-222.ngrok-free.app/api" : "";

export const apiRoutes = {
    Register: `${prefix}/authentication/register`,
    Login: `${prefix}/authentication/login`,
    Logout: `${prefix}/authentication/logout`,
    ListRoles: `${prefix}/role/list-roles`,
    FollowedUsers: `${prefix}/chat/get-followed-users`,
    Test: `${prefix}/role/test`,
};
