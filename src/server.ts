import app from "./app";
import { Server } from "http";
import { envConfig } from "../config/envConfig";

const PORT: string | number = process.env.PORT || 3000;

const server: Server = app.listen(PORT, () => {
    console.log(`Server running on port ${envConfig.port}`);
    console.log(`Environment: ${envConfig.nodeEnv}`);
    console.log(`Morgan log level: ${envConfig.logLevel}`);
    console.log(`Swagger URL: ${envConfig.swaggerServerUrl}`);
});

export default server;