document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector(".loader");
  const mainContent = document.getElementById("main-content");

  // Initially hide the main content
  mainContent.style.opacity = "0";

  // Show loading animation for 2 seconds
  setTimeout(function() {
      // Hide the loader
      loader.style.opacity = "0";
      // Fade in the main content smoothly
      mainContent.style.transition = "opacity 1s";
      mainContent.style.opacity = "1";
  }, 2000);
});
