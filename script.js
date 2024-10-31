function firstNonRepeatedChar(str) {
    // Step 1: Create a frequency map
    const charCount = {};

    // Count each character's occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // Step 3: Return null if no non-repeated character exists
    return null;
}

// Example usage
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
