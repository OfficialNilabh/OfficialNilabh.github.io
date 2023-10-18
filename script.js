// Function to change content based on button click
function changeSectionContent(sectionName) {
    const contentSection = document.querySelector('#content-section');

    // Use AJAX to load external HTML content
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentSection.innerHTML = xhr.responseText;
        }
    };

    // Define the URL of the external HTML file based on the sectionName
    const url = sectionName + '.html';

    xhr.open('GET', url, true);
    xhr.send();
}

// Event listeners for button clicks
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionName = this.getAttribute('data-section');
        changeSectionContent(sectionName);
    });
});
