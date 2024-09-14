//Ejercicio 1

console.log("Hola mundo");

//Ejercicio 2

function numbersByTwo(numbers) {
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);
}


//Ejercicio 3

function isPalindrome(phrase) {
  const cleanedPhrase = phrase.toLowerCase().replace(/\s+/g, "");

  const InvertedPhrase = cleanedPhrase.split("").reverse().join("");

  return cleanedPhrase === InvertedPhrase;
}

//Ejercicio 4

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
