function hideSelf() {
  // ваш код...
  let hideSelfButton = document.querySelector(".hide-self-button");
  hideSelfButton.addEventListener("click", () => {
    hideSelfButton.hidden = true;
  });
}
