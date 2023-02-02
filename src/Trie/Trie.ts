export class TrieNode {
  children: TrieNode[];
  wordCount: number;

  constructor() {
    // An array of pointers representing each lower case letter.
    this.children = new Array(26);
    this.wordCount = 0;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      // We need to convert the character to an index using this method,
      // because this will get us the actual numeric representation of the
      // character. Other methods will get us NaN. We subtract by 10 because
      // we want 'a' to be 0.
      const characterIndex = parseInt(word.charAt(i), 36) - 10;
      if (current.children[characterIndex] === undefined) {
        const newNode = new TrieNode();
        current.children[characterIndex] = newNode;
      }

      current = current.children[characterIndex];
    }

    current.wordCount++;
  }
}
