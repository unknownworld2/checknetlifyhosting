export const ACCOUNTS_COLLECTION = 'accounts';

export const NEXT_PUBLIC_TOP_NAVIGATION_LOADER_COLOR = "#0047AB";

// Localhost or Production enum

export enum Environment {
    LOCAL = "local",
    PRODUCTION = "production",
}

const environment = Environment.PRODUCTION;

// If Environment is Local, use localhost, else use the production URL

export const NEXT_PUBLIC_WEB_APP_URL = environment !== Environment.PRODUCTION ? "http://localhost:3000" : "https://siratemustaqeem.website";

export interface Account {
    id: number;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt: string;  // Timestamps are usually strings in JS/TS
    updatedAt: string;
    lastLogin: string | null;  // Nullable field
    accountType: "email" | "google" | "facebook" | "apple" | "twitter";
}

export interface IBaseResponse<T> {
    data: T;  // The main payload or content of the response, type specified by generic T
    message?: string;  // Optional message string
    success?: boolean;  // Indicates if the response is successful
    errors?: string[];  // Array of error messages, if any
    statusCode?: number; // Optional HTTP status code
}
