export class TrieNode {
  children: Array<TrieNode | null>;
  wordCount: number;

  constructor() {
    // An array of pointers representing each lower case letter.
    this.children = new Array(26).fill(null);
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
      const characterIndex = Trie.#getCharacterIndex(word, i);
      if (!current.children[characterIndex]) {
        const newNode = new TrieNode();
        current.children[characterIndex] = newNode;
      }

      current = current.children[characterIndex]!;
    }

    current.wordCount++;
  }

  hasPrefix(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const characterIndex = Trie.#getCharacterIndex(word, i);
      if (!current.children[characterIndex]) {
        return false;
      }

      current = current.children[characterIndex]!;
    }

    return true;
  }

  hasWord(word: string) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const characterIndex = Trie.#getCharacterIndex(word, i);
      if (!current.children[characterIndex]) {
        return false;
      }

      current = current.children[characterIndex]!;
    }

    return current.wordCount > 0;
  }

  delete(word: string) {
    let current = this.root;
    let lastBranchNode = null;

    for (let i = 0; i < word.length; i++) {
      const characterIndex = Trie.#getCharacterIndex(word, i);
      // The word doesn't exist, no delete is required.
      if (!current.children[characterIndex]) {
        return false;
      }

      let count = 0;
      for (let j = 0; j < 26; j++) {
        if (current.children[j]) {
          count++;
        }
      }

      if (count > 1) {
        lastBranchNode = current;
      }

      current = current.children[characterIndex]!;
    }

    if (!Trie.#isLeafNode(current)) {
      current.wordCount--;
      return true;
    }

    if (lastBranchNode !== null) {
      const characterIndex = Trie.#getCharacterIndex(word, word.length - 1);
      lastBranchNode.children[characterIndex] = null;
      return true;
    }

    const characterIndex = Trie.#getCharacterIndex(word, 0);
    this.root.children[characterIndex] = null;
    return true;
  }

  static #getCharacterIndex(word: string, characterPosition: number) {
    return parseInt(word.charAt(characterPosition), 36) - 10;
  }

  static #isLeafNode(node: TrieNode) {
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i]) {
        return false;
      }
    }

    return true;
  }
}
