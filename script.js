// Define variables
const aboutText = document.querySelector('.about-text');
const navButtons = document.querySelectorAll('.button');
const contentSection = document.querySelector('#content-section');

// Define content for different sections
const sections = {
    projects: "Content for the Projects section goes here.",






    career: "Content for the Career section goes here.",







    skills: "Content for the Skills section goes here.",






    
    extras: "Content for the Extras section goes here."
};

// Function to change content based on button click
function changeSectionContent(sectionName) {
    contentSection.innerHTML = sections[sectionName];
}

// Event listeners for button clicks
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionName = this.getAttribute('data-section');
        changeSectionContent(sectionName);
    });
});
