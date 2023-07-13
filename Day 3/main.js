function printEvenNumbers(upTo) {
  for (let i = 0; i <= upTo; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function printFibonacciSequence(length) {
  let fibSeq = [0, 1]; 
  for (let i = 2; i < length; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  console.log(fibSeq.join(", "));
}

function printArrayAverage(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  console.log("Average:", average);
}

function printArrayMax(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log("Maximum number:", max);
}

function printArrayMin(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Minimum number:", min);
}

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function getPostalCode(cityName) {
  if (cityName == "Atlanta") {
    return 12345;
  }
  else if (cityName == "Charlotte") {
    return 38902;
  }
  else if (cityName == "New York") {
    return 57289;
  }
  else (
    console.log("City not found.") 
  )
}

function sortStringsAlphabetically(arr) {
  return arr.sort();
}

function sortNumbersAscending(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

function countLetterOccurrences(str, letter) {
  const regex = new RegExp(letter, 'gi');
  const matches = str.match(regex);

  return matches ? matches.length : 0;
}

function printTodaysDate() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);
  console.log("Today's date is:", formattedDate);
}