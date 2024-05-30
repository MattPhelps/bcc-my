// app/api/getImage.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url); // Create a new URL object from the reqgitest URL
  const queueId = url.searchParams.get("id"); // Get the value of the "id" search parameter
  const apiEndpoint = process.env.API_ENDPOINT; // Replace with your actual API endpoint from .env
  const apiKey = process.env.API_KEY; // Replace with your actual API key from .env

  // Check if the queueId is provided
  if (!queueId) {
    return new Response(JSON.stringify({ error: "Queue ID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  // Try to fetch data from the API
  try {
    // Make a GET request to the API endpoint with the queue ID and headers
    const response = await fetch(`${apiEndpoint}/${queueId}`, {
      headers: {
        Accept: "application/json",
        "Key-API": apiKey,
        "Version-API": "20210131",
      },
    });

    if (!response.ok) {
      // If the API response is not OK, return the status and error message
      return new Response(
        JSON.stringify({
          error: `API responded with status: ${response.status}`,
        }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    // Parse the response from the API into JSON
    const data = await response.json();

    // Check if the response data contains an array_map_queue property with at least one item
    if (data && data.array_map_queue && data.array_map_queue.length > 0) {
      // Get the first item from the array_map_queue
      const queueItem = data.array_map_queue[0];
      // If the state of the queue item is "PREDICTED", return a 200 response with the image URL
      if (queueItem.str_name_state === "PREDICTED") {
        const imageUrl = `https://api.deepsukebe.io/images/${queueItem.str_hash}.jpg`;
        return new Response(JSON.stringify({ imageUrl }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        // If the state of the queue item is not "PREDICTED", return a 202 response with a message
        return new Response(
          JSON.stringify({
            message: "Please wait, your image is being Nudified…", // Change the message to "Please wait, your image is being Nudified…",
          }),
          {
            status: 202,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      // If the response data does not contain an array_map_queue property with at least one item, return a 500 response with an error message
      return new Response(
        JSON.stringify({
          message: "Error or unexpected response format from DeepSukebe API",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    // Catch any errors during the fetch operation
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from API" }),
      {
        status: 500, // Internal Server Error
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
