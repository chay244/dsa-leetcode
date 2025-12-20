// O(N*N)
// function same(arr1, arr2) {
//     return arr1.every(e => {
//         return arr2.includes(e**2);
//     });
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let e of arr1) {
    counter1[e] = (counter1[e] || 0) + 1;
  }
  for (let e of arr2) {
    counter2[e] = (counter2[e] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key ** 2]) {
      console.log(key);
      return false;
    }
  }

  return true;
}
console.log(same([1, 4, 5, 6], [1, 16, 25, 36]));
