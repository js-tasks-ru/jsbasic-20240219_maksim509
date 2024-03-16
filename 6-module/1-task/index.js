/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
// export default class UserTable {
//   constructor(rows) {
//   }
// }

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    `;
    thead.appendChild(headerRow);

    this.rows.forEach((rowData) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${rowData.name}</td>
        <td>${rowData.age}</td>
        <td>${rowData.salary}</td>
        <td>${rowData.city}</td>
        <td><button>X</button></td>
      `;
      tbody.appendChild(row);
      row.querySelector("button").addEventListener("click", () => {
        row.remove();
      });
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
  }
}
