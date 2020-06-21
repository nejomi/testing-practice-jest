// capitalize the first letter of the string
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// reverse string
function reverse(string) {
  return [...string].reverse().join('');
}

const calculator = {
  add: (x, y) => {
    return x + y;
  },
  subtract: (x, y) => {
    return x - y;
  },
  divide: (x, y) => {
    return x / y;
  },
  multiply: (x, y) => {
    return x * y;
  },
};

//caesar cipher
function isUpperCase(str) {
  return str === str.toUpperCase();
}

let caesarCipher = (str, key) => {
  let decipher = '';

  //decipher each letter
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 65) % 26) + 65
      );
    } else {
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 97) % 26) + 97
      );
    }
  }

  return decipher;
};

// array analysis
function analyze(arr) {
  const length = arr.length;

  const getAve = (arr) => arr.reduce((p, c) => p + c, 0) / length;
  const average = getAve(arr);
  const max = Math.max.apply(Math, arr);
  const min = Math.min.apply(Math, arr);

  return {
    average,
    length,
    max,
    min,
  };
}

export { capitalize, reverse, calculator, caesarCipher, analyze };
