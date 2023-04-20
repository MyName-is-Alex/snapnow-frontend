export const prefix = process.env.NODE_ENV === "development" ? "https://356b-109-166-131-250.ngrok-free.app/api" : "";

export const apiRoutes = {
    Register: `${prefix}/authentication/register`,
    Login: `${prefix}/authentication/login`,
    Test: `${prefix}/role/test`,
};
