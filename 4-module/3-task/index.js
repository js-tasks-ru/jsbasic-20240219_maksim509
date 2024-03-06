function highlight(table) {
  // ваш код...
  let rows = table.querySelectorAll("tbody tr");

  for (let row of rows) {
    let statusCell = row.querySelector("td[data-available]");
    let genderCell = row.querySelector("td:nth-child(3)");
    let ageCell = row.querySelector("td:nth-child(2)");

    // Проставляем класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status
    if (statusCell) {
      if (statusCell.dataset.available === "true") {
        row.classList.add("available");
      } else if (statusCell.dataset.available === "false") {
        row.classList.add("unavailable");
      }
    }

    // Проставляем атрибут hidden, если атрибута data-available нет вообще
    if (!statusCell) {
      row.setAttribute("hidden", true);
    }

    // Проставляем класс male/female в зависимости от содержимого ячейки Gender
    if (genderCell) {
      if (genderCell.textContent === "m") {
        row.classList.add("male");
      } else if (genderCell.textContent === "f") {
        row.classList.add("female");
      }
    }

    // Добавляем inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18
    if (ageCell && parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
