import Fastify from "fastify";
import cors from "@fastify/cors";
import { healthRoutes } from "./routes/healthRoutes.js";

export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.register(cors, {
    origin: "http://localhost:5173",
  });

  app.register(healthRoutes);

  return app;
}