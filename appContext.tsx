import { createContext, useState, ReactNode } from "react";

export type isAuthType = {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<isAuthType>({ isAuthenticated: false, setIsAuthenticated: () => {} });

export { AppContext };
