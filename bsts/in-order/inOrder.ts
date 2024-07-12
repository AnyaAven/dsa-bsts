import { aC } from "vitest/dist/reporters-yx5ZTtEV";
import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  const results: number[] = [];
  if (node.left !== null) results.push(...inOrder(node.left));
  results.push(node.val);
  if (node.right !== null) results.push(...inOrder(node.right));

  return results;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {

  if (node === null) return accum;

  if (node.left !== null) accum.push(...inOrder(node.left));
  accum.push(node.val);
  if (node.right !== null) accum.push(...inOrder(node.right));

  return accum;
}


export { inOrder, inOrderAccum };
