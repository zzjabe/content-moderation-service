import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    firebase: {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    },
    logLevel: process.env.NODE_ENV === "production" ? "combined" : "dev",
};

export default envConfig;