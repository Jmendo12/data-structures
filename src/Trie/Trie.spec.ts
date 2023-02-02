import { Trie, TrieNode } from "./Trie";

describe("TrieNode", () => {
  it("Can create a TrieNode", () => {
    const node = new TrieNode();

    expect(node).not.toBeNull();
    expect(node.children).toEqual([]);
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
    expect(trie.root.children[0]).not.toBeUndefined();
    expect(trie.root.children[0].children[13]).not.toBeUndefined();
    expect(trie.root.children[0].children[13].children[3]).not.toBeUndefined();

    trie.insert("ant");
    expect(trie.root.children[0]).not.toBeUndefined();
    expect(trie.root.children[0].children[13]).not.toBeUndefined();
    expect(trie.root.children[0].children[13].children[19]).not.toBeUndefined();
  });
});
