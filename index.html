<!DOCTYPE html>
<html>
<head>
  <title>Legal Marketplace</title>
  <style>
    /* Optional: Added a little CSS for better readability */
    body { font-family: sans-serif; margin: 20px; }
    h1 { color: #333; }
    #lawyer-list { list-style: none; padding: 0; }
    #lawyer-list li {
      padding: 10px;
      margin-bottom: 5px;
      border-bottom: 1px solid #eee;
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>
  <h1>Find Online Lawyers</h1>
  <ul id="lawyer-list">
    <!-- Initial loading message -->
    <li>Loading online lawyers...</li>
  </ul>

  <script>
    // **CORRECTION:** Replaced placeholder with your live Railway URL
    const BACKEND_URL = "https://nwo-backend-production.up.railway.app";

    async function fetchLawyers( ) {
      try {
        const res = await fetch(`${BACKEND_URL}/api/lawyer/list`);
        
        // Check if the response was successful
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const lawyers = await res.json();
        const listEl = document.getElementById("lawyer-list");
        listEl.innerHTML = ""; // Clear the list

        if (lawyers.length === 0) {
          listEl.innerHTML = "<li>No lawyers are currently online.</li>";
          return;
        }

        lawyers.forEach(l => {
          const li = document.createElement("li");
          // Assuming l.name and l.rating are available from the backend response
          li.textContent = `${l.name} - Rating: ${l.rating}`;
          listEl.appendChild(li);
        });
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        const listEl = document.getElementById("lawyer-list");
        listEl.innerHTML = `<li>Error connecting to backend: ${error.message}</li>`;
      }
    }

    fetchLawyers();
    setInterval(fetchLawyers, 10000); // refresh every 10s
  </script>
</body>
</html>
