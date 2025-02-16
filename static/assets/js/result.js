const video = document.getElementById("videoPreview");
  const timestampsList = document.getElementById("timestampsList");
  let intervalId; // For controlling the interval
  let messageCount = 0; // Counter for messages
  let currentSecond = 0; // Tracks the current second

  // Function to add a message for the current second
  const addMessage = () => {
    currentSecond++;
    const listItem = document.createElement("li");
    messageCount++;
    listItem.textContent = `Message ${messageCount}, Timestamp: ${currentSecond} seconds`;
    timestampsList.appendChild(listItem);
    timestampsList.scrollTop = timestampsList.scrollHeight; // Auto-scroll to the latest message
  };

  // Start the interval for frame updates
  const startFrameUpdates = () => {
    intervalId = setInterval(() => {
      if (!video.paused && !video.ended) {
        if (Math.floor(video.currentTime) > currentSecond) {
          addMessage(); // Add a message for the next second
        }
      }
    }, 500); // Check every 500ms to ensure no second is skipped
  };

  // Stop frame updates
  const stopFrameUpdates = () => {
    clearInterval(intervalId);
  };

  // Reset the message section and counters when the video restarts
  const resetMessages = () => {
    timestampsList.innerHTML = ""; // Clear all messages
    messageCount = 0; // Reset message count
    currentSecond = 0; // Reset current second
  };

  // Event listeners
  video.addEventListener("play", startFrameUpdates);
  video.addEventListener("pause", stopFrameUpdates);
  video.addEventListener("ended", stopFrameUpdates);
  video.addEventListener("seeked", resetMessages); // Resets if the user restarts or seeks
  video.addEventListener("timeupdate", () => {
    if (Math.floor(video.currentTime) === 0 && !video.paused) {
      resetMessages(); // Reset messages when the video starts from the beginning
    }
  });