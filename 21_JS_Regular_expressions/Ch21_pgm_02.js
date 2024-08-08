function tenMostFrequentWords(text, topN = 10) {
    // Normalize the text
    const normalizedText = text
      .toLowerCase() // Convert to lowercase
      .replace(/[^\w\s]/g, ''); // Remove punctuation
  
    // Tokenize the text into words
    const words = normalizedText.split(/\s+/);
  
    // Count word frequencies
    const wordCount = {};
    words.forEach(word => {
      if (word) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
  
    // Convert wordCount object to an array of {word, count} objects
    const wordFrequencyArray = Object.entries(wordCount).map(([word, count]) => ({ word, count }));
  
    // Sort by count in descending order
    wordFrequencyArray.sort((a, b) => b.count - a.count);
  
    // Return the top `N` most frequent words
    return wordFrequencyArray.slice(0, topN);
  }
  
  // Test the function with the given paragraph
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  