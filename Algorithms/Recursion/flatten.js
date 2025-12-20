function flatten(arr) {
  if (arr.length === 0) return [];
  const [head, ...tail] = arr;
  return Array.isArray(head)
    ? flatten(head).concat(flatten(tail))
    : [head, ...flatten(tail)];
}
console.log(flatten([89, [1, 2], [3, 4]]));
