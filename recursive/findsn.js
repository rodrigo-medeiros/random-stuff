function findSn(n) {
  if (n === 1) {
    return 2;
  } else if (n === 2) {
    return 3;
  }
  return 2 * findSn(n - 1) + 3 * findSn(n - 2);
}

console.log("findSn(1): " + findSn(1));
console.log("findSn(2): " + findSn(2));
console.log("findSn(3): " + findSn(3));
console.log("findSn(4): " + findSn(4));
console.log("findSn(5): " + findSn(5));
console.log("findSn(6): " + findSn(6));
