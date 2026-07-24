import { useEffect, useState } from "react";
import { getApiHealth } from "./api/health"

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

  return (
    <main>
      <h1>Pokémon Research Terminal</h1>

      {error ? (
        <p role="alert">{error}</p>
      ) : (
        <p>{status}</p>
      )}
    </main>
  );
}

export default App;