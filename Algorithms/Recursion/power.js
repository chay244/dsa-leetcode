function power(num, exp) {
  if (exp === 1) return 1;
  return num * power(num, exp - 1);
}

console.log(power(2, 4));
