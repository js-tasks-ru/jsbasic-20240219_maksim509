function truncate(str, maxlength) {
  // ваш код...

  if (str.length <= maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + "…";
  }
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);
