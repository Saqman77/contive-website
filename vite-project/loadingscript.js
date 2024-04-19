document.addEventListener('DOMContentLoaded', function() {
    // Get the loading line element
    const loadingLine = document.querySelector('.loading .line');

    // Get the progress number element
    const progressNumber = document.querySelector('.progress-number');

    // Calculate and update progress number
    function updateProgress() {
        const containerWidth = loadingLine.parentElement.offsetWidth;
        const interval = 20; // Update interval in milliseconds

        let width = 0;
        const progressInterval = setInterval(() => {
            width += containerWidth * (interval / 5000); // Assuming animation duration is 2s
            let progress = Math.round((width / containerWidth) * 100);
            if (progress > 100) {
                progress = 100; // Cap progress at 100%
            }
            progressNumber.textContent = progress + '%';

            if (width >= containerWidth) {
                clearInterval(progressInterval);
            }
        }, interval);
    }

    // Run the updateProgress function when the page loads
    updateProgress();
});
