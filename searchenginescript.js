// Get references to the input field, and the suggestions list
const searchBox = document.getElementById('searchBox');
const suggestionsList = document.getElementById('suggestionsList');

// Define an array of objects with suggestion text and associated URLs
const suggestionsData = [
    { text: 'Learn Blockchain Basics', url: 'https://example.com/blockchain-basics' },
    { text: 'Advanced Smart Contracts', url: 'https://example.com/smart-contracts' },
    { text: 'Introduction to Cryptography', url: 'https://example.com/cryptography' },
    { text: 'Decentralized Finance (DeFi) Workshop', url: 'https://example.com/defi-workshop' },
    { text: 'Blockchain Development Bootcamp', url: 'https://example.com/development-bootcamp' },
    { text: 'Learn about NFTs', url: 'https://example.com/nfts' }
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
