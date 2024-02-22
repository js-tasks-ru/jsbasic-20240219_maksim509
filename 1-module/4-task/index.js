function checkSpam(str) {
  // ваш код...
  let changedRegister = str.toLowerCase();
  return changedRegister.includes("1xbet") || changedRegister.includes("xxxxx");
}

checkSpam("1XbeT now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
