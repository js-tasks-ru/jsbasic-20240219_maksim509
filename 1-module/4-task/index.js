function checkSpam(str) {
  // ваш код...
  let changedRegister = str.toLowerCase();
  return changedRegister.includes("1xbet") || changedRegister.includes("xxxxx");
}

console.log(checkSpam("1XbeT now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
