export const prefix = process.env.NODE_ENV === "development" ? "https://954d-86-124-21-55.ngrok-free.app/api" : "";

export const apiRoutes = {
    Register: `${prefix}/authentication/register`,
    Login: `${prefix}/authentication/login`,
    ListRoles: `${prefix}/role/list-roles`,
    Test: `${prefix}/role/test`,
};
