import type { FastifyInstance } from "fastify";

export async function healthRoutes(app: FastifyInstance) {
  app.get("/api/health", async () => {
    return {
      status: "ok",
      service: "pokemon-research-api",
      timestamp: new Date().toISOString(),
    };
  });
}