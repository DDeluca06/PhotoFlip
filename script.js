const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.getElementById('feedbackDropdown');

// On click, show this list
dropdownButton.addEventListener('click', function(event) {
    dropdownContent.classList.toggle('show');
    event.stopPropagation();
});

// When we select a feedback type, get rid of the list
dropdownContent.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-value')) {
        dropdownButton.textContent = event.target.textContent;
        dropdownContent.classList.remove('show');
        // Debugging
        console.log('Selected feedback type:', event.target.dataset.value);
    }
});

// If we click outside of the feedback list, we should also close it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#feedbtn') && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});

// Handle form submission
document.getElementById("feedback-form").addEventListener("submit", function (e) {
    const textarea = this.querySelector("textarea");
    const feedbackText = textarea.value.trim();
    if (feedbackText) {
        alert("Thank you for your feedback!");
        e.preventDefault();
        textarea.value = "";
        // If we had a server, send this back and ruin an engineer's day
    }
});