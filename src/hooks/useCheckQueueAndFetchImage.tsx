import { useState } from "react";

export const useCheckQueueAndFetchImage = ({setIsError, setStatusMessage, setIsDownloading}) => {
    const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  
    const checkQueueAndFetchImage = async (queueId: string) => {
      const checkStatus = async () => {
        const response = await fetch(`/api/getImage?id=${queueId}`);
        const data = await response.json();
        
        if (response.ok && data.imageUrl) {
          // Image is ready
          setStatusMessage('Your image has been Nudified.');
          setIsError(false);
          setProcessedImageUrl(data.imageUrl);
          setIsDownloading(false);
        } else if (response.ok && data.message) {
          // Image is not ready, try again
          setStatusMessage(data.message);
          setIsError(false);
          setIsDownloading(true);
          setTimeout(checkStatus, 5000); // Wait for 5 seconds before trying again
        } else {
          // Handle other errors
          setStatusMessage('Nudify Failed: ' + (data.message || 'Unknown error'));
          setIsError(true);
          setIsDownloading(false);
          console.error(
            "Error fetching processed image:",
            data.message || "Unknown error"
          );
        }
      };
  
      await checkStatus();
    };
  
    return { processedImageUrl, checkQueueAndFetchImage };
  };