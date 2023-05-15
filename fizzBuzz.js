function fizz_buzz(N) {
  let array = [];
  for (let i = 1; i <= N; i++) {
    let result = "";
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    array.push(result || i);
  }
  return array;
}

fizz = fizz_buzz(15);

console.log(fizz);
