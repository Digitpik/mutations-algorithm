function mutation(arr) {
  // Normalize both strings to lowercase to ensure case-insensitivity
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  // Inspect every single letter of the second word
  for (let i = 0; i < secondWord.length; i++) {
    const currentLetter = secondWord[i];

    // If a letter is completely missing (-1), the mutation is invalid
    if (firstWord.indexOf(currentLetter) === -1) {
      return false;
    }
  }

  // If the loop completes without returning false, all letters exist
  return true;
}

// Verification Logs
console.log("--- Testing Mutations Algorithm ---");
console.log(`mutation(["hello", "hey"]): ${mutation(["hello", "hey"])}`); // false
console.log(`mutation(["Alien", "line"]): ${mutation(["Alien", "line"])}`); // true
console.log(`mutation(["Mary", "Army"]): ${mutation(["Mary", "Army"])}`); // true
