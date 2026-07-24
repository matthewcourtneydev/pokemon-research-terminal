type HealthResponse = {
  status: string;
  service: string;
  timestamp: string;
};

const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function getApiHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/api/health`);

  if (!response.ok) {
    throw new Error("The API could not be reached.");
  }

  return response.json();
}