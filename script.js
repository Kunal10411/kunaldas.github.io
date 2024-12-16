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
<<<<<<< HEAD
});
=======
});
>>>>>>> d77b85335ab02c314c96268b25752f8e210b6177
