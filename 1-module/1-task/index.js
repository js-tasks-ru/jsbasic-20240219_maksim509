function factorial(n) {
  // ваш код...
  let index = 1;
  for (let i = 2; i <= n; i++) {
    index = index * i;
  }
  return index;
}
console.log(factorial(5));
