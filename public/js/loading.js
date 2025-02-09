// Example to simulate loading time
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Hide the loader container
        document.querySelector('.loader-container').style.display = 'none';
        // Redirect to the ReliaRating view after the loader is hidden
        window.location.href = '/reliarating';
    }, 5000); // Simulates a 5-second loading process
});
