// Get references to the input field, and the suggestions list
const searchBox = document.getElementById('searchBox');
const suggestionsList = document.getElementById('suggestionsList');

// Define an array of objects with suggestion text and associated URLs
const suggestionsData = [
    { text: 'Learn About Ethereum', url: 'https://blockchainuniversityedu.github.io/The%20Historical%20Token%20of%20ETH%20(Article).html' },
    { text: 'Blockchain & NFTs', url: 'https://blockchainuniversityedu.github.io/Applications%20on%20the%20Blockchain%20(Part%201)%20(Article).html' },
    { text: 'Cryptocurrency Mining', url: 'https://blockchainuniversityedu.github.io/The%20Incredible%20Technology%20of%20Crypto%20Mining%20(Article).html' },
    { text: 'The Hardware Wallet', url: 'https://blockchainuniversityedu.github.io/The%20Hardware%20Wallet%20-%20Dissected%20(Part%201%20-%20Connecting%20Parts)%20(Article).html' },
    { text: 'Gaming On The Blockchain', url: 'https://blockchainuniversityedu.github.io/The%20GameFi%20Scene,%20Explained%20(Article).html' },
    { text: 'Whats DogeCoin?', url: 'https://blockchainuniversityedu.github.io/The%20Unintentional%20Success%20of%20DogeCoin%20(Article).html' },
    { text: 'Satoshi Nakamoto', url: 'https://blockchainuniversityedu.github.io/Who%20Is%20Satoshi%20Nakamoto%20(Article).html' }
];

// Add an event listener to the search box to filter suggestions as the user types
searchBox.addEventListener('input', function () {
    const filter = searchBox.value.toLowerCase(); // Get the input value in lowercase
    let filteredSuggestions = []; // Initialize an array to store matching suggestions

    // Loop through all suggestions and check if they match the filter
    filteredSuggestions = suggestionsData.filter(suggestion => 
        suggestion.text.toLowerCase().includes(filter) && filter !== ''
    );

    // Generate the suggestions dropdown
    updateSuggestionsDropdown(filteredSuggestions);
});

// Function to update the suggestions dropdown
function updateSuggestionsDropdown(suggestions) {
    // Clear the current suggestions
    suggestionsList.innerHTML = '';

    // Populate the suggestions list if there are matching suggestions
    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.classList.add('suggestion-item');

            // Create a clickable link for each suggestion
            const link = document.createElement('a');
            link.textContent = suggestion.text;
            link.href = suggestion.url; // Set the URL for the link
            link.classList.add('suggestion-link'); // Add a class for styling
            link.target = '_blank'; // Optional: Open link in a new tab

            // Append the link to the list item
            li.appendChild(link);

            // Append the list item to the suggestions list
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block'; // Show the suggestions list
    } else {
        suggestionsList.style.display = 'none'; // Hide the suggestions list if there are no matches
    }
}
