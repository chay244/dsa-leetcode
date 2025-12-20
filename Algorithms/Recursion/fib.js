function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
// 1 1 2 3 5 8 13

// fib(4)
// return fib(3) + fib(2)
// return (fib(2) + fib(1)) + 1
// r

console.log(fib(6));
