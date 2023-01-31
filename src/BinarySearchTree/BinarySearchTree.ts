export class TreeNode {
  key: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    key: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(key: number) {
    if (!this.root) {
      this.root = new TreeNode(key);
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = new TreeNode(key);
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = new TreeNode(key);
          return;
        }

        current = current.right;
      }
    }
  }

  delete(key: number) {
    this.root = BinarySearchTree.#delete(this.root, key);
  }

  get(key: number): TreeNode | null {
    return BinarySearchTree.#get(this.root, key);
  }

  getInorderTraversal(): number[] {
    const keys: number[] = [];
    BinarySearchTree.#traverseInorder(this.root, keys);
    return keys;
  }

  getPreorderTraversal(): number[] {
    const keys: number[] = [];
    BinarySearchTree.#traversePreorder(this.root, keys);
    return keys;
  }

  getPostorderTraversal(): number[] {
    const keys: number[] = [];
    BinarySearchTree.#traversePostOrder(this.root, keys);
    return keys;
  }

  getLevelorderTraversal(): number[] {
    const keys: number[] = [];

    if (this.root) {
      const queue = [this.root];

      while (queue.length > 0) {
        const current = queue.shift();

        if (!current) {
          break;
        }

        keys.push(current.key);

        if (current.left) {
          queue.push(current.left);
        }

        if (current.right) {
          queue.push(current.right);
        }
      }
    }

    return keys;
  }

  static #delete(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
      return root;
    }

    if (key < root.key) {
      root.left = BinarySearchTree.#delete(root.left, key);
      return root;
    }

    if (key > root.key) {
      root.right = BinarySearchTree.#delete(root.right, key);
      return root;
    }

    if (!root.left) {
      return root.right;
    }

    if (!root.right) {
      return root.left;
    }

    let parent = root;
    let current = root.right;

    while (current.left !== null) {
      parent = current;
      current = current.left;
    }

    if (parent !== root) {
      parent.left = current.right;
    } else {
      parent.right = current.right;
    }

    root.key = current.key;
    return root;
  }

  static #get(root: TreeNode | null, key: number): TreeNode | null {
    if (!root || root.key === key) {
      return root;
    }

    if (key < root.key) {
      return BinarySearchTree.#get(root.left, key);
    }

    return BinarySearchTree.#get(root.right, key);
  }

  static #traverseInorder(root: TreeNode | null, keys: number[]): void {
    if (root) {
      this.#traverseInorder(root.left, keys);
      keys.push(root.key);
      this.#traverseInorder(root.right, keys);
    }
  }

  static #traversePreorder(root: TreeNode | null, keys: number[]): void {
    if (root) {
      keys.push(root.key);
      BinarySearchTree.#traversePreorder(root.left, keys);
      BinarySearchTree.#traversePreorder(root.right, keys);
    }
  }

  static #traversePostOrder(root: TreeNode | null, keys: number[]): void {
    if (root) {
      BinarySearchTree.#traversePostOrder(root.left, keys);
      BinarySearchTree.#traversePostOrder(root.right, keys);
      keys.push(root.key);
    }
  }
}
