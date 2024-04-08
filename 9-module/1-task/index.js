// export default function promiseClick(button) {
//   // ваш код...
// }

export default function promiseClick(button) {
  return new Promise((resolve) => {
    button.addEventListener(
      "click",
      (event) => {
        resolve(event);
      },
      { once: true }
    );
  });
}
