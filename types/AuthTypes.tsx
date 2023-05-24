import { Role } from "./RoleType";

export type RegisterDataType = {
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    role: Role | undefined;
};
export type LoginDataType = {
    email: string;
    password: string;
};
export type Cookie = {
    key: string;
    value: string;
    expireDate: string;
};
export type JwtTokenType = {
    aud: string;
    exp: string;
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
    iss: string;
};
