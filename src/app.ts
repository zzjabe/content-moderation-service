import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import { envConfig } from "../config/envConfig"
import dotenv from "dotenv";

// Load environment variables BEFORE your internal imports!
dotenv.config();

import moderationRoutes from "./api/v1/routes/moderationRoutes";

const app: Express = express();

app.use(morgan(envConfig.logLevel));

app.use(express.json());

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
    res.status(404).json({ message: "Endpoint not found" });
});

export default app;