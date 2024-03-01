let user1 = {
  balance: "$1,825.65",
  picture: "https://placehold.it/32x32",
  age: 21,
  name: "Golden Branch",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana",
};
// let user2 = {
//   balance: "$1,925.65",
//   picture: "https://placehold.it/32x32",
//   age: 31,
//   name: "Maksim Levanovich",
//   gender: "male",
//   greeting: "Hello, Golden Branch! You have 7 unread messages.",
//   favouriteFruit: "banana",
// };
// let user3 = {
//   balance: "$1,825.65",
//   picture: "https://placehold.it/32x32",
//   age: 11,
//   name: "Ole Lukoe",
//   gender: "Female",
//   greeting: "Hello, Golden Branch! You have 7 unread messages.",
//   favouriteFruit: "banana",
// };
// let users = [user1, user2, user3];

function showSalary(users, age) {
  // ваш код...
   let filteredUsers = users.filter((user) => user.age <= age);
   let result = filteredUsers.map((user) => `${user.name}, ${user.balance}`);
   return result.join("\n");
}

console.log(showSalary(users, 32));
