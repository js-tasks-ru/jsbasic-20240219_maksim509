const inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  // ваш код...
  const numbers = str.split(" ").map((item) => parseFloat(item));

  const validNumbers = numbers.filter((item) => !isNaN(item));

  let result = {
    min: Math.min(...validNumbers),
    max: Math.max(...validNumbers),
  };
  return result;
}
getMinMax(inputData);
