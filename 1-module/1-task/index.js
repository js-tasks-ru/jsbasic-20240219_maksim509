function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
    console.log(
      `Зашли в цикл,i = ${i}. Умножаем i на возрастающий при каждой итерации result`
    );
  }
  return result;
}
let result = factorial(5);
console.log(`Факториал равен ${result}`);
