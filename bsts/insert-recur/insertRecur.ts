import { BNode, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecur(bst: BSTNum, val: number): void {
  if (!bst.root) {
    bst.root = new BNode(val);
    return;
  }

  if (bst.root.val === val) return;

  if (val < bst.root.val) {
    // go left
    if (!bst.root.left) {
      bst.root.left = new BNode(val);
      return;
    }
    const leftBST = new BSTNum(bst.root.left)
    insertRecur(leftBST, val);
  } else {
    // go right
    if (!bst.root.right) {
      bst.root.right = new BNode(val);
      return;
    }

    const rightBST = new BSTNum(bst.root.right)
    insertRecur(rightBST, val);
  }
}

export { insertRecur };

