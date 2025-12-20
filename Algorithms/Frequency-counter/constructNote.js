function constructNote(str1, str2) {
  const lookup = {};
  for (let e of str2) {
    lookup[e] = (lookup[e] || 0) + 1;
  }
  for (let e of str1) {
    if (lookup[e]) {
      lookup[e]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(constructNote("aa", "abc"));
