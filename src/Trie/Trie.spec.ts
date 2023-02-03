import { Trie, TrieNode } from "./Trie";

describe("TrieNode", () => {
  it("Can create a TrieNode", () => {
    const node = new TrieNode();

    expect(node).not.toBeNull();
    expect(node.children).toEqual(new Array(26).fill(null));
    expect(node.wordCount).toEqual(0);
  });
});

describe("Trie", () => {
  it("Can create a Trie structure", () => {
    const trie = new Trie();
    expect(trie.root).not.toBeNull();
  });

  it("can insert a word into the trie", () => {
    const trie = new Trie();
    trie.insert("and");
    // Check that each character was placed in the trie.
    expect(trie.root.children[0]).not.toBeNull();
    expect(trie.root.children[0]?.children[13]).not.toBeNull();
    expect(trie.root.children[0]?.children[13]?.children[3]).not.toBeNull();

    trie.insert("ant");
    expect(trie.root.children[0]).not.toBeNull();
    expect(trie.root.children[0]?.children[13]).not.toBeNull();
    expect(trie.root.children[0]?.children[13]?.children[19]).not.toBeNull();
  });

  it("can check if a prefix exists within the trie", () => {
    const trie = new Trie();
    trie.insert("and");
    trie.insert("test");

    expect(trie.hasPrefix("an")).toEqual(true);
    expect(trie.hasPrefix("tes")).toEqual(true);
    expect(trie.hasPrefix("false")).toEqual(false);
  });

  it("can check if a full word exists within the trie", () => {
    const trie = new Trie();
    trie.insert("and");
    trie.insert("test");

    expect(trie.hasWord("an")).toEqual(false);
    expect(trie.hasWord("and")).toEqual(true);

    expect(trie.hasWord("tes")).toEqual(false);
    expect(trie.hasWord("test")).toEqual(true);

    expect(trie.hasWord("false")).toEqual(false);
  });

  it("can delete a word from the trie", () => {
    const trie = new Trie();
    trie.insert("an");
    trie.insert("and");
    trie.insert("ant");

    // Test the case where we delete a word that is the prefix of another word.
    expect(trie.root.children[0]?.children[13]?.wordCount).toEqual(1);
    expect(trie.delete("an")).toEqual(true);
    expect(trie.root.children[0]?.children[13]?.wordCount).toEqual(0);

    // Test the case where the word shares a common prefix with other words in the trie.
    expect(trie.root.children[0]?.children[13]?.children[3]?.wordCount).toEqual(
      1
    );
    expect(trie.delete("and")).toEqual(true);
    expect(trie.root.children[0]?.children[13]?.children[3]).toBeNull();

    // Test the case where the word does not share a common prefix with other words in the trie.
    expect(
      trie.root.children[0]?.children[13]?.children[19]?.wordCount
    ).toEqual(1);
    expect(trie.delete("ant")).toEqual(true);
    expect(trie.root.children[0]).toBeNull();

    // Test the case where the word does not exist in the trie.
    expect(trie.delete("test")).toEqual(false);
  });
});
