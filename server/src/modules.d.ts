declare module NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        COOKIESESSION_SECRET: string;
        // ...
    }
}
