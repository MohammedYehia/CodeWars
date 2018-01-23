//Kata=>https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  return parseFloat(arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)));
}
