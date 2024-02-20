/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Измените эту функцию так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
 const regex = /^[^\s]+$/; // Проверка на отсутствие пробелов

  return regex.test(name) && typeof name === "string" && name.length >= 4 && name !== null;
}


function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

sayHello();
