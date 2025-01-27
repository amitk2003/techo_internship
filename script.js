document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const modeText = document.getElementById("modeText");

    // Add a toggle event listener
    darkModeToggle.addEventListener("click", () => {
        // Toggle a dark-mode class on the body
        body.classList.toggle("dark-mode");

        // Change button icon and mode text
        const icon = document.getElementById("night");
        if (body.classList.contains("dark-mode")) {
            icon.src = "themes.png"; // Update with your light mode icon
            if (modeText) modeText.textContent = "Dark Mode";
        } else {
            icon.src = "light-mode.png"; // Update with your dark mode icon
            if (modeText) modeText.textContent = "light Mode";
        }
    });
});
