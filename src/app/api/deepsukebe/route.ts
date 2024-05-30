// app/api/deepsukebe.ts
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse the incoming request body
  const apiEndpoint = process.env.API_ENDPOINT;
  const apiKey = process.env.API_KEY; // Replace with your API key form .env
console.log('apiEndpoint', apiEndpoint);

  // Make a POST request to the API endpoint with the request body and headers
  const apiResponse = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json',
          'Key-API': apiKey,
          'Version-API': '20210131',
      },
      body: JSON.stringify(body),
  });
// Parse the response from the API into JSON
  const responseData = await apiResponse.json();
// If the API response is not OK (status code is not 2xx), return a new Response object with the API response status and body
  if (!apiResponse.ok) {
      return new Response(JSON.stringify(responseData), {
          status: apiResponse.status,
          headers: { 'Content-Type': 'application/json' },
      });
  }
// If the API response is OK, return a new Response object with status 200 and the API response body
  return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
  });
}



