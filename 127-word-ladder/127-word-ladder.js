/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  // Because 'wordList' is an array, lookups for values
  // will be a linear search ( O(n) ), so we'll convert
  // it to a Set so we can get O(1) lookup time for words
  const wordsSet = new Set(wordList)

  // Check if our endWord is in our set
  if (!wordsSet.has(endWord)) return 0

  // Initialize our queue to support BFS
  // NOTE: Arrays are not the best data structure to
  // model a queue, however, it is built into JS and
  // works well enough for this example. There is a
  // potencial for performance gains by replacing this
  // with a custom SLL implementation.
  const queue = []
  queue.push(beginWord)

  // Initialize our Set to keep track of words we've seen
  const seenWords = new Set()
  seenWords.add(beginWord)

  // Because we know there is a path to our end word we'll
  // initialize our changes counter to 1
  let changes = 1

  while (queue.length !== 0) {
    // Keep track of our queue size, when we've looped through
    // the current size, we'll increment our 'changes' counter
    // and then resume working the queue
    const size = queue.length
    for (let i = 0; i < size; i++) {
      // Pull the first word out of our queue
      const word = queue.shift()

      // Check if we've found our end word
      if (word === endWord) return changes

      // Loop over all chars in the word, changing them, to
      // see if we can construct new words that are in our
      // word list
      for (let i = 0; i < word.length; i++) {
        // Replace each char with a-z using unicode (97=a, 122=z)
        for (let j = 97; j < 123; j++) {
          const newWord = (
            word.substring(0, i) + String.fromCharCode(j)
          ).concat(word.substring(i + 1))

          // Check if we found a new word that is in our list, but
          // hasn't been encountered before
          if (wordsSet.has(newWord) && !seenWords.has(newWord)) {
            // It's a new word, track it in our sets
            queue.push(newWord)
            seenWords.add(newWord)
          }
        }
      }
    }

    // Increment our changes counter
    ++changes
  }

  // We were unable to find a path to our 'endWord', so we'll return
  // 0 here
  return 0
};

