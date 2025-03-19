// Function to update the width of the progress bar
function updateProgressBar(progress) {
  const progressBar = document.getElementById("total-progress-bar");
  progressBar.style.width = progress + "%";
}

// Function to update the label with the current stage
function updateLabel(message) {
  const label = document.getElementById("loading-label");
  label.innerText = message;
}

function startProgressBarForStage(
  stageLabel,
  startPercentage,
  endPercentage,
  duration
) {
  updateLabel(stageLabel);
  let progress = startPercentage;
  const intervalTime = 50; // Time between progress updates (ms)
  const totalSteps = duration / intervalTime; // Total number of updates
  const increment = (endPercentage - startPercentage) / totalSteps; // Progress increment per interval

  const interval = setInterval(() => {
    progress += increment;
    if (progress >= endPercentage) {
      progress = endPercentage;
      clearInterval(interval); // Stop the interval once we reach the final progress
    }
    updateProgressBar(progress); // Update the progress bar
  }, intervalTime);
}

setTimeout(function () {
  const totalDuration = 10000; // Total time in milliseconds (10 seconds)
  const stageDuration = 3000; // Each stage takes 3 seconds

  // First stage: DoorDash API (Simulating the first 33% of the total progress)
  startProgressBarForStage(
    "Analyzing data from DoorDash...",
    0,
    33,
    stageDuration
  );

  // Second stage: Chase API (Simulating the next 33% of the total progress)
  setTimeout(() => {
    startProgressBarForStage(
      "Gathering data from Chase Bank...",
      33,
      66,
      stageDuration
    );
  }, stageDuration);

  // Third stage: Loan Calculation (Simulating the final 34% of the total progress)
  setTimeout(() => {
    startProgressBarForStage(
      "Assessing loan terms...",
      66,
      100,
      stageDuration
    );
  }, stageDuration * 2);

  // Redirect after the loading process is complete
  setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
    window.location.href = "/reliarating";
  }, totalDuration); // Redirect after 10 seconds (the total duration)
}, 1000); // Start the process after a short delay
