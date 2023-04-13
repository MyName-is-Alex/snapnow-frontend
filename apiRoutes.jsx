export const prefix = process.env.NODE_ENV === "development" ? "https://192.168.9.39:7160/api" : "";

export const apiRoutes = {
    Login: `${prefix}/authentication/login`,
    Test: `${prefix}/role/test`,
};
