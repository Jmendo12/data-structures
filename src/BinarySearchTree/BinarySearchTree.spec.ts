import { BinarySearchTree, TreeNode } from "./BinarySearchTree";

describe("TreeNode", () => {
  it("A TreeNode can be created with or without a left and right child node", () => {
    const firstNode = new TreeNode(1);
    expect(firstNode.key).toEqual(1);
    expect(firstNode.left).toBeNull();
    expect(firstNode.right).toBeNull();

    const secondNode = new TreeNode(2, firstNode);
    expect(secondNode.key).toEqual(2);
    expect(secondNode.left).not.toBeNull();
    expect(secondNode.left?.key).toEqual(1);
    expect(secondNode.right).toBeNull();

    const thirdNode = new TreeNode(3, firstNode, secondNode);
    expect(thirdNode.key).toEqual(3);
    expect(thirdNode.left).not.toBeNull();
    expect(thirdNode.left?.key).toEqual(1);
    expect(thirdNode.right).not.toBeNull();
    expect(thirdNode.right?.key).toEqual(2);
  });
});

describe("BinarySearchTree", () => {
  it("A Binary Search Tree with an empty root can be created", () => {
    const tree = new BinarySearchTree();
    expect(tree.root).toBeNull();
  });

  it("Data can be inserted into the binary search tree at the correct position", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    expect(tree.root).not.toBeNull();
    expect(tree.root?.key).toEqual(1);

    tree.insert(-5);
    expect(tree.root?.left).not.toBeNull();
    expect(tree.root?.left?.key).toEqual(-5);

    tree.insert(-3);
    expect(tree.root?.left?.right).not.toBeNull();
    expect(tree.root?.left?.right?.key).toEqual(-3);

    tree.insert(-7);
    expect(tree.root?.left?.left).not.toBeNull();
    expect(tree.root?.left?.left?.key).toEqual(-7);

    tree.insert(5);
    expect(tree.root?.right).not.toBeNull();
    expect(tree.root?.right?.key).toEqual(5);

    tree.insert(3);
    expect(tree.root?.right?.left).not.toBeNull();
    expect(tree.root?.right?.left?.key).toEqual(3);

    tree.insert(7);
    expect(tree.root?.right?.right).not.toBeNull();
    expect(tree.root?.right?.right?.key).toEqual(7);
  });

  it("Data can be correctly deleted from the tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(-3);
    tree.insert(-7);
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    tree.delete(-3);
    expect(tree.root?.left?.right).toBeNull();

    tree.delete(-5);
    expect(tree.root?.left).not.toBeNull();
    expect(tree.root?.left?.key).toEqual(-7);

    tree.delete(1);
    expect(tree.root?.key).toEqual(3);
    expect(tree.root?.left?.key).toEqual(-7);
    expect(tree.root?.right?.key).toEqual(5);
    expect(tree.root?.right?.right?.key).toEqual(7);
  });

  it("An element in the BST can be searched for and retrieved", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(5);

    const searchNodeOne = tree.get(1);
    expect(searchNodeOne).not.toBeNull();
    expect(searchNodeOne?.key).toEqual(1);

    expect(tree.get(3)).toBeNull();
  });

  it("Can return an array with the inorder traversal of the tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(5);

    expect(tree.getInorderTraversal()).toEqual([-5, 1, 5]);
  });

  it("Can return an array with the preorder traversal of the tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(5);

    expect(tree.getPreorderTraversal()).toEqual([1, -5, 5]);
  });

  it("Can return an array with the postorder traversal of the tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(5);

    expect(tree.getPostorderTraversal()).toEqual([-5, 5, 1]);
  });

  it("Can return an array with the level order traversal of the tree", () => {
    const tree = new BinarySearchTree();
    tree.insert(1);
    tree.insert(-5);
    tree.insert(5);
    tree.insert(-3);
    tree.insert(-7);
    tree.insert(3);
    tree.insert(7);

    expect(tree.getLevelorderTraversal()).toEqual([1, -5, 5, -7, -3, 3, 7]);
  });
});
