document.getElementById("dark-mode").addEventListener("click", function() {
  if (document.body.classList.contains("dark-mode")) { // If the "dark-mode" class is already active
      document.body.classList.remove("dark-mode"); // Remove the class to go back to light mode 
  } else { // If "dark-mode" class is not present
      document.body.classList.add("dark-mode"); //  Apply the class to trigger dark mode
  }
});