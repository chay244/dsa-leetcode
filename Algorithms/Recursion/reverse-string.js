function reverse(str) {
  if (str.length === 0) return "";
  console.log(str.slice(1), str[0]);
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));

// ello + h
// llo +
