document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector(".loader");
  const mainContent = document.getElementById("main-content");

  // Initially hide the main content
  mainContent.style.visibility = "hidden";

  // Show loading animation for 2 seconds
  setTimeout(function() {
      loader.style.display = "none";
      mainContent.style.visibility = "visible";
      mainContent.style.opacity = "1"; // Fade in the main content
  }, 2000);
});
