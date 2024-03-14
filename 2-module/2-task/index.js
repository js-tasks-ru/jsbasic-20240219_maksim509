function isEmpty(obj) {
  // ваш код...
  return Object.keys(obj).length === 0;
}

let schedule = {};

isEmpty(schedule); // true

schedule["8:30"] = "подъём";

isEmpty(schedule);
