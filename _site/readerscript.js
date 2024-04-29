// Get the total number of paragraphs
const totalParagraphs = document.querySelectorAll('.article p').length;
document.getElementById('totalParagraphs').textContent = totalParagraphs;

// Get paragraph elements
const currentParagraph = document.getElementById('currentParagraph');
const article = document.getElementById('article');
let currentSlide = 1;

// Set initial opacity for the first paragraph
document.querySelector('.article p').style.opacity = '1';

// Function to display the current paragraph
function displayParagraph(slide) {
    // Hide all paragraphs
    document.querySelectorAll('.article p').forEach(paragraph => {
        paragraph.style.opacity = '0';
    });

    // Show the selected paragraph with a fade-in effect
    const selectedParagraph = document.querySelector(`.article p:nth-of-type(${slide})`);
    setTimeout(() => {
        selectedParagraph.style.opacity = '1';
    }, 100); // Delay for smooth transition

    // Update the current paragraph number
    currentParagraph.textContent = slide;
}

// Event listener for next button
document.getElementById('nextButton').addEventListener('click', () => {
    if (currentSlide < totalParagraphs) {
        currentSlide++;
        displayParagraph(currentSlide);
    }
});

// Event listener for previous button
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
        displayParagraph(currentSlide);
    }
});