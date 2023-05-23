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
