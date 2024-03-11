function toggleText() {
  // ваш код...
    let toggleTextButton = document.querySelector(".toggle-text-button");
    let textElement = document.getElementById("text");

    toggleTextButton.addEventListener("click", () => {
      textElement.hidden = !textElement.hidden;
    });
}
