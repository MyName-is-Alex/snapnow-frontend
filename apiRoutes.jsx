export const prefix = process.env.NODE_ENV === "development" ? "https://f07f-109-166-129-222.ngrok-free.app/api" : "";

export const apiRoutes = {
    Register: `${prefix}/authentication/register`,
    Login: `${prefix}/authentication/login`,
    ListRoles: `${prefix}/role/list-roles`,
    Test: `${prefix}/role/test`,
};
