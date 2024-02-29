let calculator = {
  // ваш код
  read: function (a, b) {
    (this.a = a), (this.b = b);
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

calculator.read(3, 5);
console.log(calculator.sum()); // 8
console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально