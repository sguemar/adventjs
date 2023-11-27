export default function checkIsSameTree (treeA, treeB) {
  return (!treeA && !treeB) ||
  (treeA?.value === treeB?.value &&
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right))
}
