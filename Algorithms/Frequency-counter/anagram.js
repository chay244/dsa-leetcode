function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const counter1 = {};
  const counter2 = {};

  for (let e of str1) {
    counter1[e] = (counter1[e] || 0) + 1;
  }
  for (let e of str2) {
    counter2[e] = (counter2[e] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

// Single lookup
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  for (let e of str1) {
    lookup[e] = (lookup[e] || 0) + 1;
  }
  console.log(lookup);
  for (let e of str2) {
    console.log(e, lookup[e]);
    if (lookup[e]) {
      lookup[e] = lookup[e] - 1;
    } else {
      return false;
    }
    console.log(lookup);
  }

  return true;
}
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram2("aaz", "zza"));
