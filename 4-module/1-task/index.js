function makeFriendsList(friends) {
  // ваш код...
  // first version

  // const ul = document.createElement("ul");
  // friends.forEach((friend) => {
  //   const li = document.createElement("li");
  //   li.textContent = `${friend.firstName} ${friend.lastName}`;
  //   ul.append(li);
  // });
  // return ul;

  // second version used the example given at the last lesson

  const ul = document.createElement("ul");
  friends.forEach((friend) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li>${friend.firstName} ${friend.lastName}</li>`
    );
  });
  return ul;
  
}
