<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full-Stack Deployment Success</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #333;
        }
        #backend-message {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #e9e9e9;
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Vercel Frontend</h1>
        <p>This page is hosted on Vercel and is now fetching data from your Railway Backend.</p>
        <div id="backend-message">Loading message from backend...</div>
    </div>

    <script>
        // *** IMPORTANT: Replace this URL with your actual Railway URL ***
        const BACKEND_URL = 'https://nwo-backend-production.up.railway.app';

        fetch(`${BACKEND_URL}/api/message` )
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('backend-message').textContent = data.message;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById('backend-message').textContent = `Error: Could not connect to backend. Check console for details.`;
            });
    </script>
</body>
</html>
