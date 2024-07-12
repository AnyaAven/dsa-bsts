import { BNodeNum } from "../common/bst";
import { Stack } from "../common/stack";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if (!node) return null;

  if (node.val === val) return node;

  if (val < node.val) {
    return findRecursively(node.left, val);
  }

  if (val > node.val) {
    return findRecursively(node.right, val);
  }

  return null;
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  if (!node) return null;

  const toVisit = new Stack([node]);

  while (!toVisit.isEmpty()) {
    const currNode = toVisit.pop();

    if (currNode.val === val) return currNode;

    if (val < currNode.val) {
      if (!currNode.left) return null;
      toVisit.push(currNode.left);
    }

    if (val > currNode.val) {
      if (!currNode.right) return null;
      toVisit.push(currNode.right);
    }
  }

  return null;
}

export { findRecursively, find };