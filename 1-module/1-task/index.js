function factorial(n) {
  let index = 1;
  for (let i = 2; i <= n; i++) {
    index = index * i;
  }
  return index;
}
