import { useEffect, useState } from "react";
import { getApiHealth } from "./api/health"
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const [status, setStatus] = useState("Checking API...");
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkApi() {
      try {
        const result = await getApiHealth();
        setStatus(`${result.service}: ${result.status}`);
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong."
        );
      }
    }

    checkApi();
  }, []);

  return <AppRoutes />
}

export default App;