const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

// Check and apply dark mode on page load
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Event listener
if (darkModeToggle) { 
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Image error handling 
function handleImageErrors() {
  document.querySelectorAll('img').forEach(img => {
      img.onerror = function() {
          this.onerror = null;
          this.src = '../images/placeholder.png'; 
          this.alt = 'Image not available';
      };
  });
}
document.getElementById('dark-mode').addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.key === ' ') {
      // Code to toggle dark mode
  }
});

// Set the path to the default image
const defaultImagePath = '../default_image.jpg';

// Function to set up error handling for images
function addDefaultImageFallback() {
    // Select all images on the page
    const images = document.querySelectorAll("img");

    // Add the onerror event to each image
    images.forEach(img => {
        img.onerror = function() {
            // Remove error handler to prevent infinite loops
            this.onerror = null;
            // Set the source to the default image path
            this.src = defaultImagePath;
        };
    });
}

// Run the function after the DOM has loaded
document.addEventListener("DOMContentLoaded", addDefaultImageFallback);

handleImageErrors(); 